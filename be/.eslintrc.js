module.exports = {
  env: {
    browser: true,
    node: true,
    amd: true,
  },
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['prettier', 'import', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~src/*',
            group: 'external',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['.eslintrc.js'],
};
