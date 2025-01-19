const rules = {
    'exhaustive-deps': 2,
    'rules-of-hooks': 2,
};

export default Object.fromEntries(Object.entries(rules).map(e => [`hooks/${e[0]}`, e[1]]));
