module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    es2021: true,
  },
  extends: 'google',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'max-len': ['error', {code: 120, tabWidth: 2, ignoreUrls: true, ignoreStrings: true}],
    'no-console': 'error',
    indent: 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    eqeqeq: 'error',
    'no-eval': 'error',
    'no-var': 'error',
    'array-callback-return': 'error',
    'handle-callback-err': 'error',
    'no-sync': 'error',
    'one-var': ['error', 'never'],
    'no-unused-vars': 'warn',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['single', 'all', 'multiple', 'none'],
        allowSeparatedGroups: true,
      },
    ],
  },
};
