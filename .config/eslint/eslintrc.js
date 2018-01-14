module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },

    // extending recommended config and config derived from
    // eslint-config-prettier
    extends: ['eslint:recommended', 'prettier'],

    // activating eslint-plugin-prettier (--fix stuff)
    plugins: ['prettier'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 8,
    },

    rules: {
        // customizing prettier rules (unfortunately not many of them are
        // customizable)
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'es5',
                tabWidth: 4,
                semi: false,
            },
        ],

        // adding some custom ESLint rules
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        eqeqeq: ['error', 'always'],
    },
}
