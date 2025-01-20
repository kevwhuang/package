import { eslint } from '@aephonics/config';

const overrides = [
    {
        files: ['**/*.{ts,tsx,astro}'],
        languageOptions: {
            globals: {},
        },
        rules: {},
    },
];

const ignores = [
    '',
];

eslint.push(...overrides);
eslint.forEach(e => (e.ignores = ignores));

export default eslint;
