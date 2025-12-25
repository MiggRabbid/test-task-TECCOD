import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import prettierConfig from './prettier.config.cjs';

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      '.vscode/',
      'dist/',
      'src/vite-env.d.ts',
      '.eslintrc.js',
      'vite.config.ts',
      'prettier.config.cjs',
      'eslint.config.js',
      'tailwind.config.js',
      'postcss.config.js',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        NodeJS: true,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        alias: {
          map: [
            ['@', './src'],
            ['@hooks', './src/app/hooks'],
            ['@models', './src/app/models'],
            ['@router', './src/app/router'],
            ['@selectors', './src/app/selectors'],
            ['@store', './src/app/store'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': 'warn',
      'prettier/prettier': ['error', prettierConfig],
      'react/prop-types': 'off',
      'no-console': 'off',
      'no-extra-boolean-cast': 'off',
      'react/react-in-jsx-scope': 'off',
      'functional/no-conditional-statement': 'off',
      'functional/no-expression-statement': 'off',
      'functional/immutable-data': 'off',
      'functional/functional-parameters': 'off',
      'functional/no-try-statement': 'off',
      'functional/no-throw-statement': 'off',
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'testing-library/no-debug': 'off',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'no-case-declarations': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-shadow': 'warn',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
    },
  },
)

