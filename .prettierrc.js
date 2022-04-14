module.exports = {
    tabWidth: 4, // tab缩进大小,默认为2
    printWidth: 100, //行宽
    useTabs: false, // 使用tab缩进，默认false
    semi: true, // 使用分号, 默认true
    singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    TrailingCooma: "es5", // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    bracketSpacing: true, // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    jsxBracketSameLine: false, // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    arrowParens: "avoid", // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    proseWrap: "preserve", //换行方式 默认值。
    // 因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
};
