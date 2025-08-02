local typeparser = require("./luau-docgen/cli/typeparser")
local types = require("./luau-docgen/cli/rtenhance/base")
local getrt = require("./luau-docgen/cli/rtenhance/getrt")
local istatemod = require("./luau-docgen/documentor_core/generators/markdown_fuma/istate")
local markdownDocumentor = require("./luau-docgen/documentor_core/generators/markdown_fuma/typeset")

local globals = getrt()

if globals.runtime == "UnknownRt" then 
    error("Unknown runtime used. Cannot proceed with autodoc generation.")
end

-- List every file in templating-types recursively
local function listLuauFilesRecursively(currPath: string, files: {string}) 
    if globals.runtime == "lune" then 
        local luneFs = require("@lune/fs")
        local filesList = luneFs.readDir(currPath)
        for _, file in filesList do
            local path = currPath .. "/" .. file
            if luneFs.isDir(path) then
                listLuauFilesRecursively(path, files) -- Recurse into subdirectory
            else
                -- Check file extension for .luau
                if file:sub(-5) == ".luau" then
                    files[#files + 1] = path -- Add file to the list
                end
            end
        end
    else 
        error("listLuauFilesRecursively is not implemented for this runtime: " .. globals.runtime)
    end
end

local function makeOutputDir(dir: string) 
    if globals.runtime == "lune" then 
        local luneFs = require("@lune/fs")
        if not luneFs.isDir(dir) then
            luneFs.writeDir(dir)
        end
    else 
        error("makeOutputDir is not implemented for this runtime: " .. globals.runtime)
    end
end

local function string_startswith(str: string, start: string)
    return str:sub(1, #start) == start
end

local function string_endswith(str: string, ending: string)
    return ending == "" or str:sub(-#ending) == ending
end

local function determineModuleName(file: string): string? 
    if string_startswith(file, "templating-types/") then
        file = file:sub(18) -- Remove the prefix
    end

    if string_endswith(file, ".luau") then
        file = file:sub(1, -6) -- Remove the .luau extension
    else
        error("File does not have a .luau extension: " .. file)
    end

    if string_startswith(file, "discord-luau-corrections") then 
        file = file:sub(26) -- Remove the prefix
        file = "@discord-types/" .. file
        return file
    elseif string_startswith(file, "@lune") then
        print("Ignoring Lune types file: " .. file)
        return nil -- Ignore Lune types files
    else
        -- If the path includes a /_, ignore the file
        if string.find(file, "/_") then
            print("Ignoring file with /_ in path: " .. file)
            return nil
        end

        return file
    end
end

assert(determineModuleName("templating-types/discord-luau-corrections/foo.luau") == "@discord-types/foo", "Module name determination failed")

local files = {}
listLuauFilesRecursively("templating-types", files)

print("Found files: " .. table.concat(files, "\n"))

local useFullMoon = false
local include_nonexported_types = false
local erroronunsupported = false
local ignorenondoc = false

local metaAdds = {}

local function cli(globals: types.Globals) 
    -- Create istate
    local istate: istatemod.IState = {
        ignorenondoc = ignorenondoc,
        plugin = istatemod.DefaultPlugin, 
    }

    -- Initialize the plugin system
    istate.plugin.onInitialize(istate) 

    --- Document the typeset
    for _, file in files do
        print("Processing file: " .. file)

        local contents = if useFullMoon then `file://{file}` else globals.fs_ops.fs_readfile(file)

        local ok, data = xpcall(typeparser.parseContents, debug.traceback :: any, {
            contents = contents,
            usefullmoon = useFullMoon,
            includenonexportedtypes = include_nonexported_types,
            erroronunsupported = erroronunsupported,
            json_parse = if globals.proc_ops then globals.proc_ops.json_parse else nil,
            run = if globals.proc_ops then globals.proc_ops.run else nil,
            file_exists = if globals.fs_ops then globals.fs_ops.fs_fileexists else nil,
        })

        if not ok then 
            -- If the error contains "No statements could be parsed from file", skip the file
            if string.find(data, "No statements could be parsed from file") then
                continue
            end

            error(data) -- Re-throw the error with traceback
        end

        local modname = determineModuleName(file)
        if not modname then continue end -- Skip if module name is not determined
        local description = "API reference for " .. modname -- TODO: Make this configurable/nicer

        local ast = data.typeset
        local output = markdownDocumentor.documentTypeSet(istate, ast, modname, description)

        makeOutputDir("output")
        local outputDir = "output/" .. modname:gsub("/", "-"):gsub("@", "") .. ".md" -- Replace slashes with minuses for output directory
        
        globals.fs_ops.fs_writefile(outputDir, output)
        print("Documentation generated successfully at " .. outputDir)    
        table.insert(metaAdds, "apiref/" .. modname:gsub("/", "-"):gsub("@", ""))    
    end
end

cli(globals)

if globals.runtime == "lune" then 
    local serde = require("@lune/serde")
    print("Meta adds: ")
    print(serde.encode("json" :: "json", metaAdds, true))
end