// in conjunction with quizfileA.js

const exportsFromQuiz = require('./quizfileA.js');
console.log(exportsFromQuiz);

// Part 1B
// node quizfileA.js --> { dogs: 'I love dogs!', cats: 'I love cats!' }
// - an object is outputted because module.exports is an object by default

// ---------------------------------------------------------------------------------------------------

// Part 2B
// node quizfileA.js --> { dogs: 'I love dogs!', cats: 'I love cats!' }
// - Same as Part 1B
// - While module.exports is an object by default, a common pattern is to reassign module.exports to be the object that we want to export, 
//   rather than simply stick key-value pairs on it directly.

// ---------------------------------------------------------------------------------------------------

// Part 3B
// node quizfileA.js --> 'I love cats!'
// - 'exports' is just a key-value pair on the module object, 
//   and whatever it is assigned to after the module is executed will be the thing that gets exported
// - Since the cats variable is the last thing that module.exports is assigned to when we execute this module,
//   that means the string it evaluates to will be the value we receive when we require it.


// ---------------------------------------------------------------------------------------------------

// Part 4B
// node quizfileA.js --> { cats: 'I love cats!' }
// - exports value is cats as key and 'I love cats' as value
// { key : value }
// { cats: 'I love cats!' }