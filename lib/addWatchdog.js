"use strict";

var theConch = {
    watchdogs: function watchdogs(command) {
        var commands = {
            "A90": function A90() {
                return "TV_POWER";
            },
            "B90": function B90() {
                return "TV_DIR_UP_BUTTON";
            },
            'default': function _default() {
                return "UNDEFINED";
            }
        };
        return (commands[command] || commands['default'])();
    },
    barker: function barker(command) {
        var commands = {
            "TV_POWER": function TV_POWER() {
                return "echo as | cec-client -s1 -d";
            },
            "STB_DIR_UP_BUTTON": function STB_DIR_UP_BUTTON() {
                return "A126";
            },
            'default': function _default() {
                return "UNDEFINED";
            }
        };
        return (commands[command] || commands['default'])();
    }
};

var input = theConch.input("A90");
var output = theConch.output(input);
console.log(input + " -> " + output);
//# sourceMappingURL=addWatchdog.js.map