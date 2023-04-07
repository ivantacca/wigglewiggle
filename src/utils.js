const { readdir } = require('fs/promises')
const { logger } = require('./logger')

module.exports = {
    getDirectories: async source =>
        (await readdir(source, { withFileTypes: true }))
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name),
    logHelp: () => {
        logger('HELP')
    }

}