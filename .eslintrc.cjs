module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '.eslintrc.cjs', 'vite.config.ts', '*.css'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'no-console': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
};
