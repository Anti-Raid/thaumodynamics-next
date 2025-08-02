---
title: "@antiraid-ext/signal"
description: "API reference for @antiraid-ext/signal"
---

<div id="@antiraid-ext/signal"></div>

# @antiraid-ext/signal

<div id="Types"></div>

## Types

<div id="Identity"></div>

## Identity

<details>
<summary>Raw Type</summary>

```luau
type Identity<T> = {
	fire: (self: Identity<T>, ...: T) -> (),

	connect: (self: Identity<T>, callback: (...: T) -> ()) -> () -> (),

	once: (self: Identity<T>, callback: (...: T) -> ()) -> () -> (),

	wait: (self: Identity<T>) -> T,

	disconnectAll: (self: Identity<T>) -> (),

	delete: (self: Identity<T>) -> ()
}
```

</details>

<TypeTable
	type={{
		"fire": {
			type: "(self, ...: [T](#T)...) -> ()",
			description: "",
			required: true
		},
		"connect": {
			type: "(self, callback: (...: [T](#T)...) -> ()) -> () -> ()",
			description: "",
			required: true
		},
		"once": {
			type: "(self, callback: (...: [T](#T)...) -> ()) -> () -> ()",
			description: "",
			required: true
		},
		"wait": {
			type: "(self) -> [T](#T)...",
			description: "",
			required: true
		},
		"disconnectAll": {
			type: "(self) -> ()",
			description: "",
			required: true
		},
		"delete": {
			type: "(self) -> ()",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="deletedSignalError"></div>

## deletedSignalError

<details>
<summary>Function Signature</summary>

```luau
function deletedSignalError() end
```

</details>

<div id="run"></div>

## run

<details>
<summary>Function Signature</summary>

```luau
function run<T>(func: (...: T) -> (), ...: T) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="func"></div>

### func

<details>
<summary>Function Signature</summary>

```luau
func: (...: T) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="..."></div>

#### ...

[T](#T)...



<div id="..."></div>

### ...

[T](#T)...



<div id="yieldLoop"></div>

## yieldLoop

<details>
<summary>Function Signature</summary>

```luau
function yieldLoop() end
```

</details>

<div id="constructor"></div>

## constructor

\[=\[
	@class signal
	
	The main class for this package. It is actually just an array with a metatable! Constructed with:
	\`\`\`lua
	local signal = require(...)
	
	signal()
	\`\`\`
\]=\]

<details>
<summary>Function Signature</summary>

```luau
--[=[
	@class signal
	
	The main class for this package. It is actually just an array with a metatable! Constructed with:
	\`\`\`lua
	local signal = require(...)
	
	signal()
	\`\`\`
]=]
function constructor<T>() -> InternalIdentity<T> end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[InternalIdentity](#InternalIdentity)&lt;[T](#T)...&gt;<div id="signal.connect"></div>

## signal.connect

\[=\[
	@method connect
	@within signal
	
	Connects a function to the signal. This will be called whenever the signal is fired.
	Connections can be "disconnected" (they won't be called when the signal is fired) by calling the function that they return.
	\`\`\`lua
	local sig = signal()
	
	-- You can connect a function like this
	sig:connect(function(text)
		print(text)
	end)
	
	-- You can also directly connect the function like this.
	sig:connect(print)
	
	-- Will print twice, because two connections.
	sig:fire("Hello, world!")
	\`\`\`
	
	You shouldn't connect the same function twice. This is because the function is used as a reference to disconnect when disconnecting later.
	While it *might* work for simple or specialized cases, you may find that it doesn't work as expected in some cases.
	
	Connections will be ran in order of connection.
	
	It's also worth noting that disconnecting is not an optimal operation, as it will shift the array. If you have a lot of connections to a single signal, you should avoid frequent disconnections.
	
	@param callback (T...) -&gt; ()
	@return () -&gt; ()
\]=\]

<details>
<summary>Function Signature</summary>

```luau
--[=[
	@method connect
	@within signal
	
	Connects a function to the signal. This will be called whenever the signal is fired.
	Connections can be "disconnected" (they won't be called when the signal is fired) by calling the function that they return.
	\`\`\`lua
	local sig = signal()
	
	-- You can connect a function like this
	sig:connect(function(text)
		print(text)
	end)
	
	-- You can also directly connect the function like this.
	sig:connect(print)
	
	-- Will print twice, because two connections.
	sig:fire("Hello, world!")
	\`\`\`
	
	You shouldn't connect the same function twice. This is because the function is used as a reference to disconnect when disconnecting later.
	While it *might* work for simple or specialized cases, you may find that it doesn't work as expected in some cases.
	
	Connections will be ran in order of connection.
	
	It's also worth noting that disconnecting is not an optimal operation, as it will shift the array. If you have a lot of connections to a single signal, you should avoid frequent disconnections.
	
	@param callback (T...) -> ()
	@return () -> ()
]=]
function signal.connect<T>(self: InternalIdentity<T>, callback: (...: T) -> ()) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="callback"></div>

### callback

<details>
<summary>Function Signature</summary>

```luau
callback: (...: T) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="..."></div>

#### ...

[T](#T)...



<div id="signal.fire"></div>

## signal.fire

\[=\[
	@method fire
	@within signal

	Firing a signal will run all connections in order, while using thread reusage.
	\[You can find more on this optimization here\](https://devforum.roblox.com/t/thread-reuse-how-it-works-why-it-works/1999166).
	
	You should note these things about thread reusage:
	- You cannot rely on the thread being different, or the same consistently.
	- The above means that certain "no-yield" implementations might not work correctly in connections.
	- If you have a lot of connections, you should avoid yielding in said connections. Yielding forces a new thread to be spawned, which isn't optimal, but it's still okay.
	
	@param data ...
	@return void
\]=\]

<details>
<summary>Function Signature</summary>

```luau
--[=[
	@method fire
	@within signal

	Firing a signal will run all connections in order, while using thread reusage.
	[You can find more on this optimization here](https://devforum.roblox.com/t/thread-reuse-how-it-works-why-it-works/1999166).
	
	You should note these things about thread reusage:
	- You cannot rely on the thread being different, or the same consistently.
	- The above means that certain "no-yield" implementations might not work correctly in connections.
	- If you have a lot of connections, you should avoid yielding in said connections. Yielding forces a new thread to be spawned, which isn't optimal, but it's still okay.
	
	@param data ...
	@return void
]=]
function signal.fire<T>(self: InternalIdentity<T>, ...: T) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="..."></div>

### ...

[T](#T)...



<div id="signal.once"></div>

## signal.once

\[=\[
	@method once
	@within signal
	
	Connects to a signal, and disconnects after the first time it is fired.
	You can still disconnect the connection before it is fired.
	
	@param callback (T...) -&gt; ()
	@return () -&gt; ()
\]=\]

<details>
<summary>Function Signature</summary>

```luau
--[=[
	@method once
	@within signal
	
	Connects to a signal, and disconnects after the first time it is fired.
	You can still disconnect the connection before it is fired.
	
	@param callback (T...) -> ()
	@return () -> ()
]=]
function signal.once<T>(self: InternalIdentity<T>, callback: (...: T) -> ()) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="callback"></div>

### callback

<details>
<summary>Function Signature</summary>

```luau
callback: (...: T) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="..."></div>

#### ...

[T](#T)...



<div id="signal.wait"></div>

## signal.wait

\[=\[
	@method wait
	@within signal
	
	Yields the current thread until the signal is fired, and returns the arguments passed.
	Will raise an error if the thread is resumed before the signal is fired.
	
	@return T...
\]=\]

<details>
<summary>Function Signature</summary>

```luau
--[=[
	@method wait
	@within signal
	
	Yields the current thread until the signal is fired, and returns the arguments passed.
	Will raise an error if the thread is resumed before the signal is fired.
	
	@return T...
]=]
function signal.wait<T>(self: InternalIdentity<T>) -> T end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[T](#T)...<div id="signal.disconnectAll"></div>

## signal.disconnectAll

\[=\[
	@method disconnectAll
	@within signal
	
	Disconnects all connections to the signal. This is an efficient operation, utilizing \`table.clear\`.
\]=\]

<details>
<summary>Function Signature</summary>

```luau
--[=[
	@method disconnectAll
	@within signal
	
	Disconnects all connections to the signal. This is an efficient operation, utilizing \`table.clear\`.
]=]
function signal.disconnectAll<T>(self: InternalIdentity<T>) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="signal.delete"></div>

## signal.delete

\[=\[
	@method delete
	@within signal
	
	Disconnects all connections to the signal, and renders the signal unusable.
	While this technically isn't required or needed for memory concerns, you might want to use this when you're working with others.
	
	This will prevent and raise an error upon any attempts to use the signal, which is useful for debugging & catching leaks.
\]=\]

<details>
<summary>Function Signature</summary>

```luau
--[=[
	@method delete
	@within signal
	
	Disconnects all connections to the signal, and renders the signal unusable.
	While this technically isn't required or needed for memory concerns, you might want to use this when you're working with others.
	
	This will prevent and raise an error upon any attempts to use the signal, which is useful for debugging & catching leaks.
]=]
function signal.delete<T>(self: InternalIdentity<T>) -> () end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

