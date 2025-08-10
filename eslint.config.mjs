// ESLint (ECMAScript Lint — code quality tool) flat config for ESLint 9
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react': react
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    },
    settings: { react: { version: 'detect' } }
  }
]
