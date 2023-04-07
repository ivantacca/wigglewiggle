const logger = (action, options) => {
    console.log(action, actions[action]({
        dir: options?.dir,
        output: options?.output
    }))
}


const actions = {
    GENERATE: opt => `wigglegram from directory: ${opt.dir}`,
    GENERATE_SUCCESS: opt => `wiggle created: ${opt.output}`,
    HELP: opt => `List of all available wigglewiggle commands:

    actions
    - wiggle make ./path/to/folder/with/1_and_2_jpg/
    - wiggle make ./path/to/folder/with/subfolders/with/1_and_2_jpg/ --all
        
    flags
    --all — include all subfolders
    `
}

module.exports = {
    logger,
    actions
}