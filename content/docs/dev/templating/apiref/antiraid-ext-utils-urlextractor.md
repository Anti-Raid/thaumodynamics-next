---
title: "@antiraid-ext/utils/urlextractor"
description: "API reference for @antiraid-ext/utils/urlextractor"
---

<div id="@antiraid-ext/utils/urlextractor"></div>

# @antiraid-ext/utils/urlextractor

<div id="Functions"></div>

# Functions

<div id="trim_end_except_slash"></div>

## trim_end_except_slash

!nocheck

TODO: Write a better parser for URLs later on

Helper function: trim_end_except_slash

<details>
<summary>Function Signature</summary>

```luau
--!nocheck
-- TODO: Write a better parser for URLs later on
-- Helper function: trim_end_except_slash
function trim_end_except_slash(s: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="s"></div>

### s

[string](#string)

<div id="trim_end_basic"></div>

## trim_end_basic

Helper function: trim_end_basic

<details>
<summary>Function Signature</summary>

```luau
-- Helper function: trim_end_basic
function trim_end_basic(s: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="s"></div>

### s

[string](#string)

<div id="trim_start_non_alnum"></div>

## trim_start_non_alnum

Helper function: trim_start_non_alnum

<details>
<summary>Function Signature</summary>

```luau
-- Helper function: trim_start_non_alnum
function trim_start_non_alnum(s: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="s"></div>

### s

[string](#string)

<div id="is_valid_label"></div>

## is_valid_label

Function: is_valid_label

<details>
<summary>Function Signature</summary>

```luau
-- Function: is_valid_label
function is_valid_label(label: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="label"></div>

### label

[string](#string)

<div id="is_valid_tld"></div>

## is_valid_tld

Function: is_valid_tld

<details>
<summary>Function Signature</summary>

```luau
-- Function: is_valid_tld
function is_valid_tld(tld: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="tld"></div>

### tld

[string](#string)

<div id="find_valid_domain"></div>

## find_valid_domain

Function: find_valid_domain

<details>
<summary>Function Signature</summary>

```luau
-- Function: find_valid_domain
function find_valid_domain(s: string) -> string? end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="s"></div>

### s

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)?<div id="extract_query_embedded_url"></div>

## extract_query_embedded_url

Function: extract_query_embedded_url

<details>
<summary>Function Signature</summary>

```luau
-- Function: extract_query_embedded_url
function extract_query_embedded_url(segment: string) -> string? end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="segment"></div>

### segment

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)?<div id="find_domain"></div>

## find_domain

Function: find_domain

<details>
<summary>Function Signature</summary>

```luau
-- Function: find_domain
function find_domain(s: string) -> string? end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="s"></div>

### s

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)?<div id="extract_scheme_less_urls"></div>

## extract_scheme_less_urls

Function: extract_scheme_less_urls

<details>
<summary>Function Signature</summary>

```luau
-- Function: extract_scheme_less_urls
function extract_scheme_less_urls(segment: string) -> {string} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="segment"></div>

### segment

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[string](#string)\}<div id="parse_urls"></div>

## parse_urls

Function: parse_urls

<details>
<summary>Function Signature</summary>

```luau
-- Function: parse_urls
function parse_urls(input: string) -> {string} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="input"></div>

### input

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[string](#string)\}<div id="main"></div>

## main

<details>
<summary>Function Signature</summary>

```luau
function main() end
```

</details>

<div id="deep_equal"></div>

## deep_equal

Dependencies and helper functions

Assume that the function parse_urls(text) already exists.

Helper function to deeply compare two arrays for equality.

<details>
<summary>Function Signature</summary>

```luau
-- Dependencies and helper functions
-- Assume that the function parse_urls(text) already exists.
-- Helper function to deeply compare two arrays for equality.
function deep_equal(t1, t2) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="t1"></div>

### t1

No type specified!!!

<div id="t2"></div>

### t2

No type specified!!!

<div id="test_simple_urls"></div>

## test_simple_urls

Test functions

<details>
<summary>Function Signature</summary>

```luau
-- Test functions
function test_simple_urls() end
```

</details>

<div id="test_scheme_less_urls"></div>

## test_scheme_less_urls

<details>
<summary>Function Signature</summary>

```luau
function test_scheme_less_urls() end
```

</details>

<div id="test_mixed_urls"></div>

## test_mixed_urls

<details>
<summary>Function Signature</summary>

```luau
function test_mixed_urls() end
```

</details>

<div id="test_no_urls"></div>

## test_no_urls

<details>
<summary>Function Signature</summary>

```luau
function test_no_urls() end
```

</details>

<div id="test_invalid_tlds"></div>

## test_invalid_tlds

<details>
<summary>Function Signature</summary>

```luau
function test_invalid_tlds() end
```

</details>

<div id="test_invalid_labels"></div>

## test_invalid_labels

<details>
<summary>Function Signature</summary>

```luau
function test_invalid_labels() end
```

</details>

<div id="test_context_discord_https"></div>

## test_context_discord_https

<details>
<summary>Function Signature</summary>

```luau
function test_context_discord_https() end
```

</details>

<div id="test_context_path_https"></div>

## test_context_path_https

<details>
<summary>Function Signature</summary>

```luau
function test_context_path_https() end
```

</details>

<div id="test_context_prefix_dot_schemeless"></div>

## test_context_prefix_dot_schemeless

<details>
<summary>Function Signature</summary>

```luau
function test_context_prefix_dot_schemeless() end
```

</details>

<div id="test_edge_cases"></div>

## test_edge_cases

<details>
<summary>Function Signature</summary>

```luau
function test_edge_cases() end
```

</details>

<div id="test_utf8_text"></div>

## test_utf8_text

<details>
<summary>Function Signature</summary>

```luau
function test_utf8_text() end
```

</details>

<div id="test_only_tld_like"></div>

## test_only_tld_like

<details>
<summary>Function Signature</summary>

```luau
function test_only_tld_like() end
```

</details>

<div id="test_single_letter_tld_fail"></div>

## test_single_letter_tld_fail

<details>
<summary>Function Signature</summary>

```luau
function test_single_letter_tld_fail() end
```

</details>

<div id="test_numeric_tld_fail"></div>

## test_numeric_tld_fail

<details>
<summary>Function Signature</summary>

```luau
function test_numeric_tld_fail() end
```

</details>

<div id="test_complex_path_query"></div>

## test_complex_path_query

<details>
<summary>Function Signature</summary>

```luau
function test_complex_path_query() end
```

</details>

<div id="test_trailing_dot_exclusion"></div>

## test_trailing_dot_exclusion

<details>
<summary>Function Signature</summary>

```luau
function test_trailing_dot_exclusion() end
```

</details>

<div id="test_trailing_comma_exclusion"></div>

## test_trailing_comma_exclusion

<details>
<summary>Function Signature</summary>

```luau
function test_trailing_comma_exclusion() end
```

</details>

<div id="test_url_in_parentheses_exclusion"></div>

## test_url_in_parentheses_exclusion

<details>
<summary>Function Signature</summary>

```luau
function test_url_in_parentheses_exclusion() end
```

</details>

<div id="test_url_in_brackets_exclusion"></div>

## test_url_in_brackets_exclusion

<details>
<summary>Function Signature</summary>

```luau
function test_url_in_brackets_exclusion() end
```

</details>

<div id="test_empty_string"></div>

## test_empty_string

<details>
<summary>Function Signature</summary>

```luau
function test_empty_string() end
```

</details>

<div id="test_no_partial_parse_on_invalid_label"></div>

## test_no_partial_parse_on_invalid_label

<details>
<summary>Function Signature</summary>

```luau
function test_no_partial_parse_on_invalid_label() end
```

</details>

<div id="test_port_number"></div>

## test_port_number

<details>
<summary>Function Signature</summary>

```luau
function test_port_number() end
```

</details>

<div id="test_colon_not_port"></div>

## test_colon_not_port

<details>
<summary>Function Signature</summary>

```luau
function test_colon_not_port() end
```

</details>

<div id="test_t"></div>

## test_t

<details>
<summary>Function Signature</summary>

```luau
function test_t() end
```

</details>

<div id="test_masked_url"></div>

## test_masked_url

<details>
<summary>Function Signature</summary>

```luau
function test_masked_url() end
```

</details>

<div id="test_pipe_delimited_url"></div>

## test_pipe_delimited_url

<details>
<summary>Function Signature</summary>

```luau
function test_pipe_delimited_url() end
```

</details>

<div id="test_multiple_schemes"></div>

## test_multiple_schemes

<details>
<summary>Function Signature</summary>

```luau
function test_multiple_schemes() end
```

</details>

<div id="test_url_with_query_and_fragment"></div>

## test_url_with_query_and_fragment

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_query_and_fragment() end
```

</details>

<div id="test_url_with_special_characters"></div>

## test_url_with_special_characters

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_special_characters() end
```

</details>

<div id="test_url_with_underscores"></div>

## test_url_with_underscores

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_underscores() end
```

</details>

<div id="test_url_with_hyphens"></div>

## test_url_with_hyphens

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_hyphens() end
```

</details>

<div id="test_url_with_subdomain"></div>

## test_url_with_subdomain

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_subdomain() end
```

</details>

<div id="test_url_with_port"></div>

## test_url_with_port

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_port() end
```

</details>

<div id="test_url_with_auth"></div>

## test_url_with_auth

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_auth() end
```

</details>

<div id="test_url_with_ipv4"></div>

## test_url_with_ipv4

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_ipv4() end
```

</details>

<div id="test_url_with_trailing_slash"></div>

## test_url_with_trailing_slash

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_slash() end
```

</details>

<div id="test_url_with_trailing_question_mark"></div>

## test_url_with_trailing_question_mark

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_question_mark() end
```

</details>

<div id="test_url_with_trailing_hash"></div>

## test_url_with_trailing_hash

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_hash() end
```

</details>

<div id="test_url_with_trailing_exclamation"></div>

## test_url_with_trailing_exclamation

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_exclamation() end
```

</details>

<div id="test_url_with_trailing_percent"></div>

## test_url_with_trailing_percent

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_percent() end
```

</details>

<div id="test_url_with_trailing_ampersand"></div>

## test_url_with_trailing_ampersand

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_ampersand() end
```

</details>

<div id="test_url_with_trailing_equals"></div>

## test_url_with_trailing_equals

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_equals() end
```

</details>

<div id="test_url_with_trailing_plus"></div>

## test_url_with_trailing_plus

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_plus() end
```

</details>

<div id="test_url_with_trailing_asterisk"></div>

## test_url_with_trailing_asterisk

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_asterisk() end
```

</details>

<div id="test_url_with_trailing_at"></div>

## test_url_with_trailing_at

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_at() end
```

</details>

<div id="test_url_with_trailing_dollar"></div>

## test_url_with_trailing_dollar

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_dollar() end
```

</details>

<div id="test_url_with_trailing_caret"></div>

## test_url_with_trailing_caret

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_caret() end
```

</details>

<div id="test_url_with_trailing_backtick"></div>

## test_url_with_trailing_backtick

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_backtick() end
```

</details>

<div id="test_url_with_trailing_tilde"></div>

## test_url_with_trailing_tilde

<details>
<summary>Function Signature</summary>

```luau
function test_url_with_trailing_tilde() end
```

</details>

<div id="run_tests"></div>

## run_tests

Run all tests

<details>
<summary>Function Signature</summary>

```luau
-- Run all tests
function run_tests() end
```

</details>

