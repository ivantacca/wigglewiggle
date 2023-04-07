const logger = (action, options) => {
    console.log(action, actions[action]({
        dir: options.dir,
        output: options.output
    }))
}


const actions = {
    GENERATE: opt => `wigglegram from directory: ${opt.dir}`,
    GENERATE_SUCCESS: opt => `Wiggle created: ${opt.output}`
}

module.exports = {
    logger,
    actions
}