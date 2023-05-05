/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        'array-bracket-newline': ['error', 'consistent'],
        'object-curly-newline': ['error', {'consistent': true}],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', {
            'ArrayExpression': 'consistent',
            'ArrayPattern': {'minItems': 3},
        }],
        'brace-style': ['error', 'stroustrup'],
        'comma-dangle': ['warn', 'always-multiline'],
        'curly': 'error',
        'eol-last': ['error', 'always'],
        'guard-for-in': 'error',
        'indent': ['warn', 4, {'SwitchCase': 1}],
        'key-spacing': ['error', {'beforeColon': false}],
        'max-len': [
            'warn', {
                code: 160,
                ignoreUrls: true,
                ignorePattern: '^import .*',
            },
        ],
        'newline-before-return': 'warn',
        'no-console': ['warn', {allow: ['warn', 'error']}],
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', {max: 2}],
        'no-tabs': 'error',
        'no-trailing-spaces': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'object-curly-spacing': 'warn',
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
    },
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
}
