#! /usr/bin/env node

const { generate } = require('../src');
const { getDirectories, logHelp } = require('../src/utils')
const path = require('path');

const Resolver = {
    make: generate,
    help: logHelp
}

let argv = process.argv.slice(2)
let [action, dir, all, root] = argv

if(action && Resolver[action]){
    if (all === "--all") {
        getDirectories(dir)
            .then(paths => paths.map(p => Resolver[action](path.join(dir, p), root === '--root' ? dir : null)))
    } else {
        Resolver[action](dir)
    }
} else {
    Resolver.help()
}
