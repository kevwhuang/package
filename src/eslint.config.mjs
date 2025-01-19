import globals from 'globals';
import pluginAstro from 'eslint-plugin-astro';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import tslint from 'typescript-eslint';

import accessibility from './eslint/accessibility.mjs';
import astro from './eslint/astro.mjs';
import base from './eslint/base.mjs';
import format from './eslint/format.mjs';
import hooks from './eslint/hooks.mjs';
import react from './eslint/react.mjs';
import types from './eslint/types.mjs';

const eslint = [
    ...pluginAstro.configs.base,
    {
        files: ['**/*.{js,jsx,mjs,ts,tsx}'],
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
            hooks: pluginHooks,
            react: pluginReact,
            stylistic,
            tslint: tslint.plugin,
        },
        rules: {
            ...base,
            ...format,
            ...react,
            ...hooks,
            ...types,
        },
        settings: {
            react: {
                version: 'detect',
            },
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
            ...accessibility,
        },
    },
];

export default eslint;
