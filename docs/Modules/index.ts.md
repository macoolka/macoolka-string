---
title: index.ts
nav_order: 1
parent: Modules
---

# Overview

Common string function collection

---

<h2 class="text-delta">Table of contents</h2>

- [camelCase (function)](#camelcase-function)
- [camelCaseToArray (function)](#camelcasetoarray-function)
- [escapeHtml (function)](#escapehtml-function)
- [escapeRegExp (function)](#escaperegexp-function)
- [escapeUnicode (function)](#escapeunicode-function)
- [hyphenate (function)](#hyphenate-function)
- [lowerCase (function)](#lowercase-function)
- [lpad (function)](#lpad-function)
- [ltrim (function)](#ltrim-function)
- [plural (function)](#plural-function)
- [quoteString (function)](#quotestring-function)
- [removeNonASCII (function)](#removenonascii-function)
- [removeNonWord (function)](#removenonword-function)
- [repeat (function)](#repeat-function)
- [repeatSpace (function)](#repeatspace-function)
- [replaceAccents (function)](#replaceaccents-function)
- [rtrim (function)](#rtrim-function)
- [slugify (function)](#slugify-function)
- [trim (function)](#trim-function)
- [truncate (function)](#truncate-function)
- [unCamelCase (function)](#uncamelcase-function)
- [unescapeHtml (function)](#unescapehtml-function)
- [unescapeUnicode (function)](#unescapeunicode-function)
- [unhyphenate (function)](#unhyphenate-function)
- [upperCase (function)](#uppercase-function)

---

# camelCase (function)

Convert string to camelCase text.

**Signature**

```ts

export const camelCase = (str: string): string => ...

```

**Example**

```ts
import { camelCase } from 'macoolka-string'
expect(camelCase('first color hover')).toEqual('firstColorHover')
expect(camelCase('first_color_hover')).toEqual('firstColorHover')
```

Added in v0.2.0

# camelCaseToArray (function)

split camelCase text to array

**Signature**

```ts

export const camelCaseToArray = (str: string): Array<string> => ...

```

**Example**

```ts
import { camelCaseToArray } from 'macoolka-string'
expect(camelCaseToArray('firstColorHover')).toEqual(['first', 'color', 'hover'])
```

Added in v0.2.0

# escapeHtml (function)

Escapes a string for insertion into HTML.

**Signature**

```ts

export const escapeHtml = (str: string): string => ...

```

**Example**

```ts
import { escapeHtml } from 'macoolka-string'
expect(escapeHtml(`<h1>"&title" 'a1'<h1>`)).toEqual('&lt;h1&gt;&quot;&amp;title&quot; &#39;a1&#39;&lt;h1&gt;')
```

Added in v0.2.0

# escapeRegExp (function)

Escape RegExp string chars.

**Signature**

```ts

export const escapeRegExp = (str: string): string => ...

```

**Example**

```ts
import { escapeRegExp } from 'macoolka-string'
expect(escapeRegExp('/^a/')).toEqual('\\/\\^a\\/')
```

Added in v0.2.0

# escapeUnicode (function)

Escape string into unicode sequences

**Signature**

```ts

export const escapeUnicode = (shouldEscapePrintable: boolean) => (str: string): string => ...

```

**Example**

```ts
import { escapeUnicode } from 'macoolka-string'
expect(escapeUnicode(true)('我们')).toEqual('\\u6211\\u4eec')
```

Added in v0.2.0

# hyphenate (function)

Replaces spaces with hyphens, split camelCase text,
remove non-word chars, remove accents and convert to lower case.

**Signature**

```ts

export const hyphenate = (split: string = '-') => (str: string) => ...

```

**Example**

```ts
import { hyphenate } from 'macoolka-string'
expect(hyphenate('_')('firstColorHover')).toEqual('first_color_hover')
expect(hyphenate()('firstColorHover')).toEqual('first-color-hover')
```

Added in v0.2.0

# lowerCase (function)

The given string to lower case

**Signature**

```ts

export const lowerCase = (str: string): string => ...

```

**Example**

```ts
import { lowerCase } from 'macoolka-string'
expect(lowerCase('aBc')).toEqual('abc')
```

Added in v0.2.0

# lpad (function)

Pad string with `char` if its' length is smaller than `minLen`

**Signature**

```ts

export const lpad = (minLength: number, mark: string = ' ') => (str: string): string => ...

```

**Example**

```ts
import { lpad } from 'macoolka-string'
expect(lpad(5)('a')).toEqual('    a')
expect(lpad(5, '#')('a')).toEqual('####a')
expect(lpad(5)('abcd')).toEqual(' abcd')
expect(lpad(5)('abcdef')).toEqual('abcdef')
```

Added in v0.2.0

# ltrim (function)

Remove chars from beginning of string.

**Signature**

```ts

export const ltrim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => ...

```

**Example**

```ts
import { ltrim } from 'macoolka-string'
expect(ltrim()(' abc ')).toEqual('abc ')
expect(ltrim(['_'])('__abc__')).toEqual('abc__')
```

Added in v0.2.0

# plural (function)

Pluralizes a word like the prisma server would do.

**Example**

```ts
import { pluralWord } from 'macoolka-string'
expect(plural('car')).toEqual('cars')
expect(plural('gas')).toEqual('gases')
```

Added in v0.2.0

# quoteString (function)

adding quotes for a string .

**Signature**

```ts

export const quoteString = (value: string): string => ...

```

**Example**

```ts
import { quoteString } from 'macoolka-string'
expect(quoteString('a')).toEqual('"a"')
```

Added in v0.2.0

# removeNonASCII (function)

Remove non-printable ASCII chars

**Signature**

```ts

export const removeNonASCII = (str: string): string => ...

```

**Example**

```ts
import { removeNonASCII } from 'macoolka-string'
expect(removeNonASCII('\xD0a*^%b#c1')).toEqual('a*^%b#c1')
```

Added in v0.2.0

# removeNonWord (function)

Remove non-word chars.

**Signature**

```ts

export const removeNonWord = (str: string): string => ...

```

**Example**

```ts
import { removeNonWord } from 'macoolka-string'
expect(removeNonWord('a*^%b#c1')).toEqual('abc1')
```

Added in v0.2.0

# repeat (function)

Repeat string n times

**Signature**

```ts

export const repeat = (times: number) => (str: string): string => ...

```

**Example**

```ts
import { repeat } from 'macoolka-string'
expect(repeat(5)('a')).toEqual('aaaaa')
```

Added in v0.2.0

# repeatSpace (function)

Repeat space n times

**Signature**

```ts

export const repeatSpace = (a: number) => ...

```

**Example**

```ts
import { repeatSpace } from 'macoolka-string'
expect(repeatSpace(5)).toEqual('     ')
```

Added in v0.2.0

# replaceAccents (function)

Replaces all accented chars with regular ones

**Signature**

```ts

export const replaceAccents = (str: string): string => ...

```

**Example**

```ts
import { replaceAccents } from 'macoolka-string'
expect(replaceAccents('\xC8')).toEqual('E')
```

Added in v0.2.0

# rtrim (function)

Remove chars from end of string.

**Signature**

```ts

export const rtrim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => ...

```

**Example**

```ts
import { rtrim } from 'macoolka-string'
expect(rtrim()(' abc ')).toEqual(' abc')
expect(rtrim(['_'])('__abc__')).toEqual('__abc')
```

Added in v0.2.0

# slugify (function)

Convert to lower case, remove accents, remove non-word chars and
replace spaces with the specified delimeter.
Does not split camelCase text.

**Signature**

```ts

export const slugify = (delimeter: string = '-') => (str: string): string => ...

```

**Example**

```ts
import { slugify } from 'macoolka-string'
expect(slugify('_')('first Color Hover')).toEqual('first_color_hover')
expect(slugify(' ')('first Color Hover')).toEqual('first color hover')
```

Added in v0.2.0

# trim (function)

Remove given string from beginning and end of string.

**Signature**

```ts

export const trim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => ...

```

**Example**

```ts
import { trim } from 'macoolka-string'
expect(trim()(' abc ')).toEqual('abc')
expect(trim(['_'])('__abc__')).toEqual('abc')
```

Added in v0.2.0

# truncate (function)

Limit number of chars.

**Signature**

```ts

export const truncate = (maxChars: number, append: string = '...', onlyFullWords: boolean = true) => (str: string): string => ...

```

**Example**

```ts
import { truncate } from 'macoolka-string'
expect(truncate(10)('abc def ghi hing')).toEqual('abc def...')
expect(truncate(10, '~~~')('abc def ghi hing')).toEqual('abc def~~~')
expect(truncate(10, '~~~', false)('1234567890abcd d')).toEqual('1234567~~~')
```

Added in v0.2.0

# unCamelCase (function)

Add space between camelCase text.

**Signature**

```ts

export const unCamelCase = (delimiter: string = ' ') => (str: string): string => ...

```

**Example**

```ts
import { unCamelCase } from 'macoolka-string'
expect(unCamelCase('_')('firstColorHover')).toEqual('first_color_hover')
expect(unCamelCase(' ')('firstColorHover')).toEqual('first color hover')
```

Added in v0.2.0

# unescapeHtml (function)

Unescapes HTML special chars.

**Signature**

```ts

export const unescapeHtml = (str: string): string => ...

```

**Example**

```ts
import { unescapeHtml } from 'macoolka-string'
expect(unescapeHtml(`&lt;h1&gt;&quot;&amp;title&quot; &#39;a1&#39;&lt;h1&gt;`)).toEqual(`<h1>"&title" 'a1'<h1>`)
```

Added in v0.2.0

# unescapeUnicode (function)

Unescape unicode char sequences

**Signature**

```ts

export const unescapeUnicode = (str: string): string =>

  str.replace(/\\u[0-9a-f]{4}/g, (ch) => ...

```

**Example**

```ts
import { unescapeUnicode } from 'macoolka-string'
expect(unescapeUnicode('\\u6211\\u4eec')).toEqual('我们')
```

Added in v0.2.0

# unhyphenate (function)

Replaces hyphens with spaces. (only hyphens between word chars)

**Signature**

```ts

export const unhyphenate = (str: string): string => ...

```

**Example**

```ts
import { unhyphenate } from 'macoolka-string'
expect(unhyphenate('a-apple')).toEqual('a apple')
```

Added in v0.2.0

# upperCase (function)

The given string to upper case

**Signature**

```ts

export const upperCase = (str: string): string => ...

```

**Example**

```ts
import { upperCase } from 'macoolka-string'
expect(upperCase('aBc')).toEqual('ABC')
```

Added in v0.2.0
