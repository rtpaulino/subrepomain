var isEmpty = function (s) {
    return s === null || s === undefined || /^\s*$/.test('' + s);
};

var stringClean = function (s) {
    if (isEmpty(s)) {
        return s;
    }
    return ('' + s).toLowerCase().replace(/\s+/g, ' ');
};

var spacesToUnderscore = function (s) {
    if (isEmpty(s)) {
        return s;
    }
    return ('' + s).replaceAll(/\s/g, '_');
}

module.exports = {
    isEmpty,
    stringClean,
    spacesToUnderscore
};
