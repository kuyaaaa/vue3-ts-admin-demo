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
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-console": "off",
        "no-else-return": "off",
        "no-unused-vars": ["warn", { varsIgnorePattern: "Window" }],
        "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
        "no-continue": "off",
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "import/extensions": [
            2,
            "never",
            { "web.js": "never", json: "never", vue: "off", scss: "off" },
        ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "vue/multi-word-component-names": "off",
    },
};
