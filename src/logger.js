const logger = (action, path) => {
    console.log(action, actions[action](path, 'dummyoutput'))
}


const actions = {
    GENERATE: (path, output) => `wigglegram from path: ${path}`,
    GENERATE_SUCCESS: (path, output) => `Wiggle created`
}

module.exports = {
    logger,
    actions
}