var basedir = require("../").basedir;

exports["config home is $HOME/.config if $XDG_CONFIG_HOME is not set"] =
    testWithEnv({
        "HOME": "/home/bob"
    }, function(test) {
        test.equal("/home/bob/.config", basedir.configHome());
    });

function testWithEnv(env, func) {
    return function(test) {
        var oldEnv = {};
        for (key in env) {
            oldEnv[key] = process.env[key];
            process.env[key] = env[key];
        }
        func(test);
        for (key in env) {
            process.env[key] = oldEnv[key];
        }
        test.done();
    }
}
