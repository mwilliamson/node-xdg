var join = require("path").join;
var env = process.env;

exports.configHome = configHome;

function configHome() {
    if (env.XDG_CONFIG_HOME) {
        return env.XDG_CONFIG_HOME;
    } else {
        return join(env.HOME, ".config");
    }
}
