#! /usr/bin/env node

console.log(process.argv)

// Add bin to module build
// https://www.npmjs.com/package/rollup-plugin-bin

// const Resolver = {
    // install: require('./actions/install.js'),
    // list: require('./actions/list.js'),
    // diff: require('./actions/diff.js'),
    // push: require('./actions/push.js'),
    // sync: require('./actions/sync.js'),
// }

// let argv = process.argv.slice(3)
// const action = process.argv[2]

// let charms = new Array();

// argv.map((slice,index) => {
//   if(slice[0] == '-')
//     charms.push({
//       charm: slice.slice(1),
//       index
//     })
// })

// remove charm from argv
// argv = argv.filter(slice => slice[0] != '-')

// Resolver[action](argv, charms)