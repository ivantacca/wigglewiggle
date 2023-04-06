const { readdir } = require('fs/promises')

module.exports = {
    getDirectories: async source =>
        (await readdir(source, { withFileTypes: true }))
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
}