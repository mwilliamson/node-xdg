var join = require("path").join;
var env = process.env;

exports.configHome = configHome;

function configHome() {
    return join(env.HOME, ".config");
}
