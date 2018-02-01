var common = require('./common')

var args = process.argv.join(' ');

console.log(common.stringClean(args));
