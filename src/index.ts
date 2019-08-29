/**
 * Common string function collection
 * @desczh
 * 常用文本函数
 * @file
 * @since 0.2.0
 */
import { English } from './vendor/english'
import { CAMEL_CASE_BORDER, UPPER_CASE, WHITE_SPACES, NonWord, NoneASCII } from './constants'

/**
 * Repeat space n times
 * @desczh
 * 对空白符重复指定次数
 * @example
 * import { repeatSpace } from 'macoolka-string'
 * expect(repeatSpace(5)).toEqual('     ');
 * @since 0.2.0
 */
export const repeatSpace = (a: number) => repeat(a)(' ')

/**
 * Convert string to camelCase text.
 * @desczh
 * 文本转换到驼峰样式
 * @example
 * import { camelCase } from 'macoolka-string'
 * expect(camelCase('first color hover')).toEqual('firstColorHover');
 * expect(camelCase('first_color_hover')).toEqual('firstColorHover');
 * @since 0.2.0
 */
export const camelCase = (str: string): string => {
  str = replaceAccents(str)
  str = removeNonWord(str)
    .replace(/[\-_]/g, ' ') // convert all hyphens and underscores to spaces
    .replace(/\s[a-z]/g, upperCase) // convert first char of each word to UPPERCASE
    .replace(/\s+/g, '') // remove spaces
    .replace(/^[A-Z]/g, lowerCase) // convert first char to lowercase
  return str
}

/**
 * Remove chars from beginning of string.
 * @desczh
 * 从左边移除指定字符
 * @example
 * import { ltrim } from 'macoolka-string'
 * expect(ltrim()(' abc ')).toEqual('abc ');
 * expect(ltrim(['_'])('__abc__')).toEqual('abc__');
 *
 * @since 0.2.0
 */
export const ltrim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => {

  let start = 0
  const len = str.length
  const charLen = chars.length
  let found = true

  while (found && start < len) {
    found = false
    let i = -1
    const c = str.charAt(start)

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true
        start++
        break
      }
    }
  }

  return (start >= len) ? '' : str.substr(start, len)
}

/**
 * Remove chars from end of string.
 * @desczh
 * 从右边移除指定字符
 * @example
 * import { rtrim } from 'macoolka-string'
 * expect(rtrim()(' abc ')).toEqual(' abc');
 * expect(rtrim(['_'])('__abc__')).toEqual('__abc');
 *
 * @since 0.2.0
 */
export const rtrim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => {

  let end = str.length - 1
  const charLen = chars.length
  let found = true

  while (found && end >= 0) {
    found = false
    let i = -1
    const c = str.charAt(end)

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true
        end--
        break
      }
    }
  }

  return (end >= 0) ? str.substring(0, end + 1) : ''
}
/**
 * Remove given string from beginning and end of string.
 * @desczh
 * 在开始和结尾移除指定的字符
 * @example
 * import { trim } from 'macoolka-string'
 * expect(trim()(' abc ')).toEqual('abc');
 * expect(trim(['_'])('__abc__')).toEqual('abc');
 *
 * @since 0.2.0
 */
export const trim = (chars: Array<string> = WHITE_SPACES) => (str: string): string => ltrim(chars)(rtrim(chars)(str))
/**
 * Escapes a string for insertion into HTML.
 * @desczh
 * 转义HTML关键字，便于把文本添加到html中。
 * @example
 * import { escapeHtml } from 'macoolka-string'
 * expect(escapeHtml(`<h1>"&title" 'a1'<h1>`)).toEqual('&lt;h1&gt;&quot;&amp;title&quot; &#39;a1&#39;&lt;h1&gt;');
 *
 * @since 0.2.0
 */
export const escapeHtml = (str: string): string => str
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/'/g, '&#39;')
  .replace(/"/g, '&quot;')

/**
 * Unescapes HTML special chars.
 * @desczh
 * 取消转义html
 * @example
 * import { unescapeHtml } from 'macoolka-string'
 * expect(unescapeHtml(`&lt;h1&gt;&quot;&amp;title&quot; &#39;a1&#39;&lt;h1&gt;`)).toEqual(`<h1>"&title" 'a1'<h1>`);
 *
 * @since 0.2.0
 */
export const unescapeHtml = (str: string): string =>
  str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#0*39;/g, '\'')
    .replace(/&quot;/g, '"')
/**
 * Escape RegExp string chars.
 * @desczh
 * 转义正则表达式
 * @example
 * import { escapeRegExp } from 'macoolka-string'
 * expect(escapeRegExp('/^a/')).toEqual('\\/\\^a\\/');
 *
 * @since 0.2.0
 */
export const escapeRegExp = (str: string): string => str.replace(/\W/g, '\\$&')

/**
 * Escape string into unicode sequences
 * @desczh
 * 转义`Unicode`
 * @example
 * import { escapeUnicode } from 'macoolka-string'
 * expect(escapeUnicode(true)('我们')).toEqual('\\u6211\\u4eec');
 *
 * @since 0.2.0
 */
export const escapeUnicode = (shouldEscapePrintable: boolean) => (str: string): string => {

  return str.replace(/[\s\S]/g, (ch) => {
    // skip printable ASCII chars if we should not escape them
    if (!shouldEscapePrintable && (/[\x20-\x7E]/).test(ch)) {
      return ch
    }
    // we use "000" and slice(-4) for brevity, need to pad zeros,
    // unicode escape always have 4 chars after "\u"
    return '\\u' + ('000' + ch.charCodeAt(0).toString(16)).slice(-4)
  })
}
/**
 * Unescape unicode char sequences
 * @desczh
 * 取消转义unicode
 * @example
 * import { unescapeUnicode } from 'macoolka-string'
 * expect(unescapeUnicode('\\u6211\\u4eec')).toEqual('我们');
 *
 * @since 0.2.0
 */
export const unescapeUnicode = (str: string): string =>

  str.replace(/\\u[0-9a-f]{4}/g, (ch) => {
    const code = parseInt(ch.slice(2), 16)
    return String.fromCharCode(code)
  })
/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 * @desczh
 * 用空白替换连字符
 * @example
 * import { unhyphenate } from 'macoolka-string'
 * expect(unhyphenate('a-apple')).toEqual('a apple');
 *
 * @since 0.2.0
 */
export const unhyphenate = (str: string): string => str.replace(/(\w)(-)(\w)/g, '$1 $3')
/**
 * Pluralizes a word like the prisma server would do.
 * @desczh
 * 复数一个英文单词
 * @example
 * import { pluralWord } from 'macoolka-string'
 * expect(plural('car')).toEqual('cars');
 * expect(plural('gas')).toEqual('gases');
 *
 * @since 0.2.0
 */
export function plural(name: string): string {
  const pluralWord = English.plural(name)
  if (pluralWord === null || pluralWord === name) {
    if (name.endsWith('s')) {
      return name + 'es'
    } else {
      return name + 's'
    }
  } else {
    return pluralWord
  }
}

/**
 * Replaces all accented chars with regular ones
 * @desczh
 * 替换所有的异体字符
 * @example
 * import { replaceAccents } from 'macoolka-string'
 * expect(replaceAccents('\xC8')).toEqual('E');
 *
 * @since 0.2.0
 */
export const replaceAccents = (str: string): string => {

  // verifies if the String has accents and replace them
  if (str.search(/[\xC0-\xFF]/g) > -1) {
    str = str
      .replace(/[\xC0-\xC5]/g, 'A')
      .replace(/[\xC6]/g, 'AE')
      .replace(/[\xC7]/g, 'C')
      .replace(/[\xC8-\xCB]/g, 'E')
      .replace(/[\xCC-\xCF]/g, 'I')
      .replace(/[\xD0]/g, 'D')
      .replace(/[\xD1]/g, 'N')
      .replace(/[\xD2-\xD6\xD8]/g, 'O')
      .replace(/[\xD9-\xDC]/g, 'U')
      .replace(/[\xDD]/g, 'Y')
      .replace(/[\xDE]/g, 'P')
      .replace(/[\xE0-\xE5]/g, 'a')
      .replace(/[\xE6]/g, 'ae')
      .replace(/[\xE7]/g, 'c')
      .replace(/[\xE8-\xEB]/g, 'e')
      .replace(/[\xEC-\xEF]/g, 'i')
      .replace(/[\xF1]/g, 'n')
      .replace(/[\xF2-\xF6\xF8]/g, 'o')
      .replace(/[\xF9-\xFC]/g, 'u')
      .replace(/[\xFE]/g, 'p')
      .replace(/[\xFD\xFF]/g, 'y')
  }

  return str
}
/**
 * The given string to lower case
 * @desczh
 * 转换文本到小写样式
 * @example
 * import { lowerCase } from 'macoolka-string'
 * expect(lowerCase('aBc')).toEqual('abc');
 *
 * @since 0.2.0
 */
export const lowerCase = (str: string): string => str.toLowerCase()
/**
 * The given string to upper case
 * @desczh
 * 转换文本到大写样式
 * @example
 * import { upperCase } from 'macoolka-string'
 * expect(upperCase('aBc')).toEqual('ABC');
 *
 * @since 0.2.0
 */
export const upperCase = (str: string): string => str.toUpperCase()
/**
 * adding quotes for a string .
 * @desczh
 * 给文本加引号
 * @example
 * import { quoteString } from 'macoolka-string'
 * expect(quoteString('a')).toEqual('"a"');
 *
 * @since 0.2.0
 */
export const quoteString = (value: string): string => {
  return JSON.stringify(value)
}

/**
 * Remove non-printable ASCII chars
 * @desczh
 * 移除非ASCII字符
 * @example
 * import { removeNonASCII } from 'macoolka-string'
 * expect(removeNonASCII('\xD0a*^%b#c1')).toEqual('a*^%b#c1');
 *
 * @since 0.2.0
 *
 */
export const removeNonASCII = (str: string): string => str.replace(NoneASCII, '')

/**
 * Remove non-word chars.
 * @desczh
 * 移除非单词的字符
 * @example
 * import { removeNonWord } from 'macoolka-string'
 * expect(removeNonWord('a*^%b#c1')).toEqual('abc1');
 * @since 0.2.0
 */
export const removeNonWord = (str: string): string => str.replace(NonWord, '')
/**
 * Repeat string n times
 * @desczh
 * 重复一个文本在指定次数
 * @example
 * import { repeat } from 'macoolka-string'
 * expect(repeat(5)('a')).toEqual('aaaaa');
 *
 * @since 0.2.0
 */
export const repeat = (times: number) => (str: string): string => {

  let result = ''
  if (times < 1) {
    return ''
  }

  while (times > 0) {
    if (times % 2 !== 0) {
      result += str
    }

    times = Math.floor(times / 2)
    str += str
  }

  return result
}
/**
 * Pad string with `char` if its' length is smaller than `minLen`
 * @desczh
 * 补足文本到一个指定的长度
 * @example
 * import { lpad } from 'macoolka-string'
 * expect(lpad(5)('a')).toEqual('    a');
 * expect(lpad(5,'#')('a')).toEqual('####a');
 * expect(lpad(5)('abcd')).toEqual(' abcd');
 * expect(lpad(5)('abcdef')).toEqual('abcdef');
 *
 * @since 0.2.0
 */
export const lpad = (minLength: number, mark: string = ' ') => (str: string): string =>
  (str.length < minLength) ? repeat(minLength - str.length)(mark) + str : str
/**
 * Add space between camelCase text.
 * @desczh
 * 消除驼峰样式,并用指定的字符连接
 * @example
 * import { unCamelCase } from 'macoolka-string'
 * expect(unCamelCase('_')('firstColorHover')).toEqual('first_color_hover');
 * expect(unCamelCase(' ')('firstColorHover')).toEqual('first color hover');
 *
 * @since 0.2.0
 */
export const unCamelCase = (delimiter: string = ' ') => (str: string): string => {

  function join(_: any, c1: string, c2: string) {
    return c1 + delimiter + c2
  }

  return str.replace(CAMEL_CASE_BORDER, join).toLowerCase()

}
/**
 * Convert to lower case, remove accents, remove non-word chars and
 * replace spaces with the specified delimeter.
 * Does not split camelCase text.
 * @desczh
 * 用指定的字符替换空白并小写
 * @example
 * import { slugify } from 'macoolka-string'
 * expect(slugify('_')('first Color Hover')).toEqual('first_color_hover');
 * expect(slugify(' ')('first Color Hover')).toEqual('first color hover');
 *
 * @since 0.2.0
 */
export const slugify = (delimeter: string = '-') => (str: string): string =>
  lowerCase(trim()(removeNonWord(replaceAccents(str))).replace(/ +/g, delimeter))

/**
 * Limit number of chars.
 * @desczh
 * 限制文本的长度
 * @example
 * import { truncate } from 'macoolka-string'
 * expect(truncate(10)('abc def ghi hing')).toEqual('abc def...');
 * expect(truncate(10,'~~~')('abc def ghi hing')).toEqual('abc def~~~');
 * expect(truncate(10,'~~~',false)('1234567890abcd d')).toEqual('1234567~~~');
 *
 * @since 0.2.0
 */
export const truncate = (maxChars: number, append: string = '...', onlyFullWords: boolean = true) => (str: string): string => {

  maxChars = onlyFullWords ? maxChars + 1 : maxChars

  str = trim()(str)
  if (str.length <= maxChars) {
    return str
  }

  str = str.substr(0, maxChars - append.length)
  // crop at last space or remove trailing whitespace
  str = onlyFullWords ? str.substr(0, str.lastIndexOf(' ')) : trim()(str)
  return str + append
}

/**
 * Replaces spaces with hyphens, split camelCase text,
 * remove non-word chars, remove accents and convert to lower case.
 * @desczh
 * 替换驼峰样式到连字符样式
 * @example
 * import { hyphenate } from 'macoolka-string'
 * expect(hyphenate('_')('firstColorHover')).toEqual('first_color_hover');
 * expect(hyphenate()('firstColorHover')).toEqual('first-color-hover');
 *
 * @since 0.2.0
 */

export const hyphenate = (split: string = '-') => (str: string) => {
  return lowerCase(trim()(removeNonWord(replaceAccents(str))).replace(UPPER_CASE, split + '$1'))

}
/**
 * split camelCase text to array
 * @desczh
 * 拆分驼峰样式到数组
 * @example
 * import { camelCaseToArray } from 'macoolka-string'
 * expect(camelCaseToArray('firstColorHover')).toEqual(['first', 'color', 'hover']);
 *
 * @since 0.2.0
 */
export const camelCaseToArray = (str: string): Array<string> => {
  return hyphenate()(str).split('-')
}
