# node-xdg

Generate paths based on the [XDG Base Directory specification](http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html‎).

# Installation

    npm install xdg
    
# Usage

Assuming that `$HOME` is `/home/bob`,
and no specific data directories are set:

```javascript
var basedir = require("xdg").basedir;

var configHome = basedir.configHome(); // == /home/bob/.config
var configPath = basedir.configPath("app/config"); // == /home/bob/.config/app/config

var dataHome = basedir.dataHome(); // == /home/bob/.local/share
var dataPath = basedir.dataPath("app/data"); // == /home/bob/.local/share/app/data
```
