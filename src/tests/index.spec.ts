import {
  hyphenate, camelCaseToArray,slugify,
  camelCase,unCamelCase,
   upperCase, lowerCase,
   ltrim, rtrim, trim,
   truncate,lpad,
   repeat,repeatSpace,
   quoteString,removeNonASCII,removeNonWord,
   escapeHtml,unescapeHtml,escapeRegExp,
   escapeUnicode,unescapeUnicode,
   replaceAccents,plural,unhyphenate
} from '../';
describe('string', () => {
  it('replaceAccents', () => {
    expect(replaceAccents('\xC8')).toEqual('E');

  })
  it('plural', () => {
    expect(plural('我')).toEqual('我s');
    expect(plural('我s')).toEqual('我ses');
    expect(plural('car')).toEqual('cars');
    expect(plural('gas')).toEqual('gases');

  })
  it('unhyphenate', () => {
    expect(unhyphenate('a-apple')).toEqual('a apple');

  })
  it('lowerCase', () => {
    expect(lowerCase('aBc')).toEqual('abc');

  })
  it('upperCase', () => {
    expect(upperCase('aBc')).toEqual('ABC');

  })
  
  it('ltrim', () => {
    expect(ltrim()('')).toEqual('');
    expect(ltrim()(' abc ')).toEqual('abc ');
    expect(ltrim(['_'])('__abc__')).toEqual('abc__');
  })
  it('rtrim', () => {
    expect(rtrim()('')).toEqual('');
    expect(rtrim()(' abc ')).toEqual(' abc');
    expect(rtrim(['_'])('__abc__')).toEqual('__abc');
  })
  it('trim', () => {
    expect(trim()('')).toEqual('');
    expect(trim()(' abc ')).toEqual('abc');
    expect(trim(['_'])('__abc__')).toEqual('abc');
  })
  it('camelCase', () => {
    expect(camelCase('first color hover')).toEqual('firstColorHover');
    expect(camelCase('first_color_hover')).toEqual('firstColorHover');
  })
  it('unCamelCase', () => {
    expect(unCamelCase('_')('firstColorHover')).toEqual('first_color_hover');
    expect(unCamelCase(' ')('firstColorHover')).toEqual('first color hover');
    expect(unCamelCase()('firstColorHover')).toEqual('first color hover');
  })
  it('slugify', () => {
    expect(slugify('_')('first Color Hover')).toEqual('first_color_hover');
    expect(slugify(' ')('first Color Hover')).toEqual('first color hover');
    expect(slugify()('first Color Hover')).toEqual('first-color-hover');
  })
  it('hyphenate', () => {
    expect(hyphenate('_')('firstColorHover')).toEqual('first_color_hover');
    expect(hyphenate()('firstColorHover')).toEqual('first-color-hover');
  })
  
  it('camelCaseToArray', () => {
    expect(camelCaseToArray('firstColorHover')).toEqual(['first', 'color', 'hover']);
  });
  it('truncate', () => {
    expect(truncate(10)('abc def')).toEqual('abc def');
    expect(truncate(10)('abc def ghi hing')).toEqual('abc def...');
    expect(truncate(10,'~~~')('abc def ghi hing')).toEqual('abc def~~~');
    expect(truncate(10,'~~~',false)('1234567890abcd d')).toEqual('1234567~~~');
  });
  it('lpad', () => {
    expect(lpad(5)('a')).toEqual('    a');
    expect(lpad(5,'#')('a')).toEqual('####a');
    expect(lpad(5)('abcd')).toEqual(' abcd');
    expect(lpad(5)('abcdef')).toEqual('abcdef');
  });
  it('repeat', () => {
    expect(repeat(0)('a')).toEqual('');
    expect(repeat(5)('a')).toEqual('aaaaa');
  });
  it('repeatSpace', () => {
    expect(repeatSpace(5)).toEqual('     ');
  
  });
  it('quoteString', () => {
    expect(quoteString('a')).toEqual('"a"');
 
  });
  it('removeNonASCII', () => {
    expect(removeNonASCII('\xD0a*^%b#c1')).toEqual('a*^%b#c1');
  });
  it('removeNonWord', () => {
    expect(removeNonWord('a*^%b#c1')).toEqual('abc1');
  });
  it('escapeHtml', () => {
    expect(escapeHtml(`<h1>"&title" 'a1'<h1>`)).toEqual('&lt;h1&gt;&quot;&amp;title&quot; &#39;a1&#39;&lt;h1&gt;');
  });
  it('unescapeHtml', () => {
    expect(unescapeHtml(`&lt;h1&gt;&quot;&amp;title&quot; &#39;a1&#39;&lt;h1&gt;`)).toEqual(`<h1>"&title" 'a1'<h1>`);
  });
  it('escapeRegExp', () => {
    expect(escapeRegExp('/^a/')).toEqual('\\/\\^a\\/');
  });
  it('escapeUnicode', () => {
    expect(escapeUnicode(true)('\x20')).toEqual('\\u0020');
    expect(escapeUnicode(false)('\x20')).toEqual(' ');
    expect(escapeUnicode(false)('我们')).toEqual('\\u6211\\u4eec');
  });
  it('escapeUnicode', () => {
    expect(unescapeUnicode('\\u6211\\u4eec')).toEqual('我们');
  });
  truncate
});
