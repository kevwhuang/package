import globals from 'globals';
import pluginA11y from 'eslint-plugin-jsx-a11y';
import pluginAstro from 'eslint-plugin-astro';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import tslint from 'typescript-eslint';

import a11y from './eslint/a11y.mjs';
import astro from './eslint/astro.mjs';
import base from './eslint/base.mjs';
import format from './eslint/format.mjs';
import hooks from './eslint/hooks.mjs';
import react from './eslint/react.mjs';
import types from './eslint/types.mjs';

const eslint = [
    ...pluginAstro.configs.base,
    {
        files: ['**/*.{js,mjs,ts,tsx}'],
        ignores: null,
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.node,
                Bun: true,
            },
            parser: tslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
            sourceType: 'module',
        },
        linterOptions: {
            noInlineConfig: true,
            reportUnusedDisableDirectives: true,
        },
        name: 'aephonics/base',
        plugins: {
            stylistic,
        },
        rules: {
            ...base,
            ...format,
        },
    },
    {
        files: ['**/*.tsx'],
        name: 'aephonics/jsx',
        plugins: {
            a11y: pluginA11y,
            hooks: pluginHooks,
            react: pluginReact,
        },
        rules: {
            ...react,
            ...hooks,
            ...a11y,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        name: 'aephonics/typescript',
        plugins: {
            tslint: tslint.plugin,
        },
        rules: {
            ...types,
        },
    },
    {
        files: ['**/*.astro'],
        name: 'aephonics/astro',
        plugins: {
            stylistic,
        },
        rules: {
            ...base,
            ...format,
            ...astro,
        },
    },
];

export default eslint;
