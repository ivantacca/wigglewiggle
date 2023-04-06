#! /usr/bin/env node

const {generate} = require('../src');

// Add bin to module build
// https://www.npmjs.com/package/rollup-plugin-bin

// wigglewiggle make ./path/to/folder/with/1_and_2_jpg/
// wigglewiggle make --all ./path/to/folder/with/subfolders/with/1_and_2_jpg/

// --all means subfolders


// flags
// specify input image extension


const Resolver = {
    make: generate,
}

let argv = process.argv.slice(2)
let [action, path, flag] = argv


if(flag === "--all"){
    // import { readdir } from 'fs/promises'

    // const getDirectories = async source =>
    //   (await readdir(source, { withFileTypes: true }))
    //     .filter(dirent => dirent.isDirectory())
    //     .map(dirent => dirent.name)
} else {
    Resolver[action](path)
}

