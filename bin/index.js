#! /usr/bin/env node

const { generate } = require('../src');
const { getDirectories } = require('../src/utils')
const path = require('path');

const Resolver = {
    make: generate,
}

let argv = process.argv.slice(2)
let [action, dir, flag] = argv


if (flag === "--all") {
    getDirectories(dir)
        .then(paths => paths.map(p => Resolver[action](path.join(dir, p))))
} else {
    Resolver[action](dir)
}

