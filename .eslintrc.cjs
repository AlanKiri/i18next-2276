module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    rules: {
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-mixed-spaces-and-tabs': 0,
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        'no-extra-boolean-cast': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react-hooks/exhaustive-deps': 'off'
    }
};
