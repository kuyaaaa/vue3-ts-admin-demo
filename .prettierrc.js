module.exports = {
    // tab缩进大小,默认为2
    tabWidth: 4,
    //行宽
    printWidth: 100,
    // 使用tab缩进，默认false
    useTabs: false,
    // 使用分号, 默认true
    semi: true,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    singleQuote: false,
    // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    TrailingCooma: "es5",
    // 行尾序列模式
    endOfLine: "lf",
    // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    bracketSpacing: true,
    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    jsxBracketSameLine: false,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    arrowParens: "avoid",
    //换行方式 默认值。
    // 因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    proseWrap: "preserve",
    // 行尾序列设置
    endOfLine: "auto",
};
