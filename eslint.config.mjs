import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, react, prettier: eslintPluginPrettier },
    extends: [
      'eslint:recommended',
      'js/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      eslintConfigPrettier,
    ],
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
    },
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
