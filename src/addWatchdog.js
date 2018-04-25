const theConch = {
    watchdogs: function (command) {
        var commands = {
            "A90": function () {
                return "TV_POWER"
            },
            "B90": function () {
                return "TV_DIR_UP_BUTTON"
            },
            'default': function () {
                return "UNDEFINED"
            }
        }
        return (commands[command] || commands['default'])()
    },
    barker: function (command) {
        var commands = {
            "TV_POWER": function () {
                return "echo as | cec-client -s1 -d"
            },
            "STB_DIR_UP_BUTTON": function () {
                return "A126"
            },
            'default': function () {
                return "UNDEFINED"
            }
        }
        return (commands[command] || commands['default'])()
    }
}

const input = theConch.input("A90")
const output = theConch.output(input)
console.log(`${input} -> ${output}`)