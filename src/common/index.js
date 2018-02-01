module.exports = {
    stringClean (s) {
        if (s === null || s === undefined) {
            return s;
        }
        return ('' + s).toLowerCase().replace(/\s+/g, ' ');
    }
};
