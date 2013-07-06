var join = require("path").join;
var env = process.env;

exports.configHome = readEnvOrHomeRelative("XDG_CONFIG_HOME", ".config");
exports.dataHome = readEnvOrHomeRelative("XDG_DATA_HOME", ".local/share");

function readEnvOrHomeRelative(key, relativeToHome) {
    return function() {
        if (env[key]) {
            return env[key];
        } else {
            return join(env.HOME, relativeToHome);
        }
    };
}
