// in conjunction with fileB.js

// // Part 1/1A
// const exportsFromFileB = require('./fileB') // note the relative file path
// console.log(exportsFromFileB);
// // in order to see output, go to terminal and run:
// // node fileA.js
// // {} is expected output

// ---------------------------------------------------------------------------------------------------

// // Part 3B
// const exportsFromFileB = require('./fileB')
// exportsFromFileB()
// // node fileA.js --> 5

// ---------------------------------------------------------------------------------------------------

// // Part 4
// require('./fileB')
// require('./fileB') // not a typo - actually require it twice!
// // node fileA.js --> fileB is being run!
// // 'fileB is being run!' is logged only once because Node only ever executes a file that's being required once. 
// // The first time a module is required, the file will be executed as normal and the value of module.exports will be calculated. 
// // That value is cached (that is, stored and put aside) by Node; that value is then returned from the call to require. 
// // Any subsequent time the same module is required, the file will not be executed again - instead, the cached value will be returned right away!