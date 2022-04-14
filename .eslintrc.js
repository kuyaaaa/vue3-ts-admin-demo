module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        "vue/setup-compiler-macros": true,
    },
    parserOptions: {
        ecmaVersion: 13,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "airbnb-base",
        "plugin:prettier/recommended",
        "prettier",
    ],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};
