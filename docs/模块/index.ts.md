---
title: index.ts
nav_order: 1
parent: 模块
---

# 概述

常用文本函数

---

<h2 class="text-delta">目录</h2>

- [camelCase (函数)](#camelcase-%E5%87%BD%E6%95%B0)
- [camelCaseToArray (函数)](#camelcasetoarray-%E5%87%BD%E6%95%B0)
- [escapeHtml (函数)](#escapehtml-%E5%87%BD%E6%95%B0)
- [escapeRegExp (函数)](#escaperegexp-%E5%87%BD%E6%95%B0)
- [escapeUnicode (函数)](#escapeunicode-%E5%87%BD%E6%95%B0)
- [hyphenate (函数)](#hyphenate-%E5%87%BD%E6%95%B0)
- [lowerCase (函数)](#lowercase-%E5%87%BD%E6%95%B0)
- [lpad (函数)](#lpad-%E5%87%BD%E6%95%B0)
- [ltrim (函数)](#ltrim-%E5%87%BD%E6%95%B0)
- [plural (函数)](#plural-%E5%87%BD%E6%95%B0)
- [quoteString (函数)](#quotestring-%E5%87%BD%E6%95%B0)
- [removeNonASCII (函数)](#removenonascii-%E5%87%BD%E6%95%B0)
- [removeNonWord (函数)](#removenonword-%E5%87%BD%E6%95%B0)
- [repeat (函数)](#repeat-%E5%87%BD%E6%95%B0)
- [repeatSpace (函数)](#repeatspace-%E5%87%BD%E6%95%B0)
- [replaceAccents (函数)](#replaceaccents-%E5%87%BD%E6%95%B0)
- [rtrim (函数)](#rtrim-%E5%87%BD%E6%95%B0)
- [slugify (函数)](#slugify-%E5%87%BD%E6%95%B0)
- [trim (函数)](#trim-%E5%87%BD%E6%95%B0)
- [truncate (函数)](#truncate-%E5%87%BD%E6%95%B0)
- [unCamelCase (函数)](#uncamelcase-%E5%87%BD%E6%95%B0)
- [unescapeHtml (函数)](#unescapehtml-%E5%87%BD%E6%95%B0)
- [unescapeUnicode (函数)](#unescapeunicode-%E5%87%BD%E6%95%B0)
- [unhyphenate (函数)](#unhyphenate-%E5%87%BD%E6%95%B0)
- [upperCase (函数)](#uppercase-%E5%87%BD%E6%95%B0)

---

# camelCase (函数)

文本转换到驼峰样式

**签名**

```ts

export const camelCase = (str: string): string => ...

```

**示例**

```ts
import { camelCase } from 'macoolka-string'
expect(camelCase('first color hover')).toEqual('firstColorHover')
expect(camelCase('first_color_hover')).toEqual('firstColorHover')
```

v0.2.0 中添加

# camelCaseToArray (函数)

拆分驼峰样式到数组

**签名**

```ts

export const camelCaseToArray = (str: string): Array<string> => ...

```

**示例**

```ts
import { camelCaseToArray } from 'macoolka-string'
expect(camelCaseToArray('firstColorHover')).toEqual(['first', 'color', 'hover'])
```

v0.2.0 中添加

# escapeHtml (函数)

转义 HTML 关键字，便于把文本添加到 html 中。

**签名**

```ts

export const escapeHtml = (str: string): string => ...

```

**示例**

```ts
import { escapeHtml } from 'macoolka-string'
expect(escapeHtml(`<h1>"&title" 'a1'<h1>`)).toEqual('&lt;h1&gt;&quot;&amp;title&quot; &#39;a1&#39;&lt;h1&gt;')
```

v0.2.0 中添加

# escapeRegExp (函数)

转义正则表达式

**签名**

```ts

export const escapeRegExp = (str: string): string => ...

```

**示例**

```ts
import { escapeRegExp } from 'macoolka-string'
expect(escapeRegExp('/^a/')).toEqual('\\/\\^a\\/')
```

v0.2.0 中添加

# escapeUnicode (函数)

转义`Unicode`

**签名**

```ts

export const escapeUnicode = (shouldEscapePrintable: boolean) => (str: string): string => ...

```

**示例**

```ts
import { escapeUnicode } from 'macoolka-string'
expect(escapeUnicode(true)('我们')).toEqual('\\u6211\\u4eec')
```

v0.2.0 中添加

# hyphenate (函数)

替换驼峰样式到连字符样式

**签名**

```ts

export const hyphenate = (split: string = '-') => (str: string) => ...

```

**示例**

```ts
import { hyphenate } from 'macoolka-string'
expect(hyphenate('_')('firstColorHover')).toEqual('first_color_hover')
expect(hyphenate()('firstColorHover')).toEqual('first-color-hover')
```

v0.2.0 中添加

# lowerCase (函数)

转换文本到小写样式

**签名**

```ts

export const lowerCase = (str: string): string => ...

```

**示例**

```ts
import { lowerCase } from 'macoolka-string'
expect(lowerCase('aBc')).toEqual('abc')
```

v0.2.0 中添加

# lpad (函数)

补足文本到一个指定的长度

**签名**

```ts

export const lpad = (minLength: number, mark: string = ' ') => (str: string): string => ...

```

**示例**

```ts
import { lpad } from 'macoolka-string'
expect(lpad(5)('a')).toEqual('    a')
expect(lpad(5, '#')('a')).toEqual('####a')
expect(lpad(5)('abcd')).toEqual(' abcd')
expect(lpad(5)('abcdef')).toEqual('abcdef')
```

v0.2.0 中添加

# ltrim (函数)

从左边移除指定字符

**签名**

```ts

export const ltrim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => ...

```

**示例**

```ts
import { ltrim } from 'macoolka-string'
expect(ltrim()(' abc ')).toEqual('abc ')
expect(ltrim(['_'])('__abc__')).toEqual('abc__')
```

v0.2.0 中添加

# plural (函数)

复数一个英文单词

**示例**

```ts
import { pluralWord } from 'macoolka-string'
expect(plural('car')).toEqual('cars')
expect(plural('gas')).toEqual('gases')
```

v0.2.0 中添加

# quoteString (函数)

给文本加引号

**签名**

```ts

export const quoteString = (value: string): string => ...

```

**示例**

```ts
import { quoteString } from 'macoolka-string'
expect(quoteString('a')).toEqual('"a"')
```

v0.2.0 中添加

# removeNonASCII (函数)

移除非 ASCII 字符

**签名**

```ts

export const removeNonASCII = (str: string): string => ...

```

**示例**

```ts
import { removeNonASCII } from 'macoolka-string'
expect(removeNonASCII('\xD0a*^%b#c1')).toEqual('a*^%b#c1')
```

v0.2.0 中添加

# removeNonWord (函数)

移除非单词的字符

**签名**

```ts

export const removeNonWord = (str: string): string => ...

```

**示例**

```ts
import { removeNonWord } from 'macoolka-string'
expect(removeNonWord('a*^%b#c1')).toEqual('abc1')
```

v0.2.0 中添加

# repeat (函数)

重复一个文本在指定次数

**签名**

```ts

export const repeat = (times: number) => (str: string): string => ...

```

**示例**

```ts
import { repeat } from 'macoolka-string'
expect(repeat(5)('a')).toEqual('aaaaa')
```

v0.2.0 中添加

# repeatSpace (函数)

对空白符重复指定次数

**签名**

```ts

export const repeatSpace = (a: number) => ...

```

**示例**

```ts
import { repeatSpace } from 'macoolka-string'
expect(repeatSpace(5)).toEqual('     ')
```

v0.2.0 中添加

# replaceAccents (函数)

替换所有的异体字符

**签名**

```ts

export const replaceAccents = (str: string): string => ...

```

**示例**

```ts
import { replaceAccents } from 'macoolka-string'
expect(replaceAccents('\xC8')).toEqual('E')
```

v0.2.0 中添加

# rtrim (函数)

从右边移除指定字符

**签名**

```ts

export const rtrim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => ...

```

**示例**

```ts
import { rtrim } from 'macoolka-string'
expect(rtrim()(' abc ')).toEqual(' abc')
expect(rtrim(['_'])('__abc__')).toEqual('__abc')
```

v0.2.0 中添加

# slugify (函数)

用指定的字符替换空白并小写

**签名**

```ts

export const slugify = (delimeter: string = '-') => (str: string): string => ...

```

**示例**

```ts
import { slugify } from 'macoolka-string'
expect(slugify('_')('first Color Hover')).toEqual('first_color_hover')
expect(slugify(' ')('first Color Hover')).toEqual('first color hover')
```

v0.2.0 中添加

# trim (函数)

在开始和结尾移除指定的字符

**签名**

```ts

export const trim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => ...

```

**示例**

```ts
import { trim } from 'macoolka-string'
expect(trim()(' abc ')).toEqual('abc')
expect(trim(['_'])('__abc__')).toEqual('abc')
```

v0.2.0 中添加

# truncate (函数)

限制文本的长度

**签名**

```ts

export const truncate = (maxChars: number, append: string = '...', onlyFullWords: boolean = true) => (str: string): string => ...

```

**示例**

```ts
import { truncate } from 'macoolka-string'
expect(truncate(10)('abc def ghi hing')).toEqual('abc def...')
expect(truncate(10, '~~~')('abc def ghi hing')).toEqual('abc def~~~')
expect(truncate(10, '~~~', false)('1234567890abcd d')).toEqual('1234567~~~')
```

v0.2.0 中添加

# unCamelCase (函数)

消除驼峰样式,并用指定的字符连接

**签名**

```ts

export const unCamelCase = (delimiter: string = ' ') => (str: string): string => ...

```

**示例**

```ts
import { unCamelCase } from 'macoolka-string'
expect(unCamelCase('_')('firstColorHover')).toEqual('first_color_hover')
expect(unCamelCase(' ')('firstColorHover')).toEqual('first color hover')
```

v0.2.0 中添加

# unescapeHtml (函数)

取消转义 html

**签名**

```ts

export const unescapeHtml = (str: string): string => ...

```

**示例**

```ts
import { unescapeHtml } from 'macoolka-string'
expect(unescapeHtml(`&lt;h1&gt;&quot;&amp;title&quot; &#39;a1&#39;&lt;h1&gt;`)).toEqual(`<h1>"&title" 'a1'<h1>`)
```

v0.2.0 中添加

# unescapeUnicode (函数)

取消转义 unicode

**签名**

```ts

export const unescapeUnicode = (str: string): string =>

  str.replace(/\\u[0-9a-f]{4}/g, (ch) => ...

```

**示例**

```ts
import { unescapeUnicode } from 'macoolka-string'
expect(unescapeUnicode('\\u6211\\u4eec')).toEqual('我们')
```

v0.2.0 中添加

# unhyphenate (函数)

用空白替换连字符

**签名**

```ts

export const unhyphenate = (str: string): string => ...

```

**示例**

```ts
import { unhyphenate } from 'macoolka-string'
expect(unhyphenate('a-apple')).toEqual('a apple')
```

v0.2.0 中添加

# upperCase (函数)

转换文本到大写样式

**签名**

```ts

export const upperCase = (str: string): string => ...

```

**示例**

```ts
import { upperCase } from 'macoolka-string'
expect(upperCase('aBc')).toEqual('ABC')
```

v0.2.0 中添加
