/**
 * Created by Pavel.Krylatov on 3/16/2015.
 */
var argv = require('minimist')(process.argv.slice(2)),
    renamer = require('./renamer.js');

function renameFiles() {
    var path;

    if (argv.dir != undefined) {
        path = argv.dir;
    } else {
        path = __dirname;
    }
    if (argv.name != undefined){
        renamer.run(path, argv.name);
    }else {
        console.log("--name parameter is required");
    }
}

module.exports.renameFiles = renameFiles;

