const rules = {
    'missing-client-only-directive-value': 2,
    'no-conflict-set-directives': 2,
    'no-deprecated-astro-canonicalurl': 2,
    'no-deprecated-astro-fetchcontent': 2,
    'no-deprecated-astro-resolve': 2,
    'no-deprecated-getentrybyslug': 2,
    'no-exports-from-components': 2,
    'no-set-html-directive': 2,
    'no-set-text-directive': 2,
    'no-unused-css-selector': 0,
    'no-unused-define-vars-in-style': 2,
    'prefer-class-list-directive': 2,
    'prefer-object-class-list': 2,
    'prefer-split-class-list': 2,
    'semi': 2,
    'sort-attributes': 2,
    'valid-compile': 2,
};

export default Object.fromEntries(Object.entries(rules).map(e => [`astro/${e[0]}`, e[1]]));
