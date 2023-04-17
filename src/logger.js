const logger = (action, options) => {
    console.log(`${colors.FgCyan}${action}${colors.Reset} ${actions[action]({
        dir: options?.dir,
        output: options?.output
    })}`)
}

const actions = {
    GENERATE: opt => `wigglegram from directory: ${colors.FgGreen}${opt.dir}${colors.Reset}`,
    GENERATE_SUCCESS: opt => `wiggle created: ${colors.FgGreen}${opt.output}${colors.Reset}`,
    HELP: opt => `List of all available wigglewiggle commands:

    ${colors.FgGreen}actions${colors.Reset}
    - wiggle make ./path/to/folder/with/1_and_2_jpg/
    - wiggle make ./path/to/folder/with/subfolders/with/1_and_2_jpg/ --all
    - wiggle make ./path/to/folder/with/subfolders/with/1_and_2_jpg/ --all --root
        
    ${colors.FgMagenta}flags${colors.Reset}
    ${colors.FgGray}--all${colors.Reset} — include all subfolders
    ${colors.FgGray}--root${colors.Reset} — set root directory as output
    `
}

const colors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",

    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",
    FgGray: "\x1b[90m",

    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m",
    BgGray: "\x1b[100m",
}

module.exports = {
    logger,
    actions
}