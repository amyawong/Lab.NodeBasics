// in conjunction with quizfileB.js

// Part 1A
const dogs = 'I love dogs!';
const cats = 'I love cats!';

module.exports.dogs = dogs;
module.exports.cats = cats;

// ---------------------------------------------------------------------------------------------------

// Part 2A
const dogs = 'I love dogs!'
const cats = 'I love cats!'

module.exports = {
  dogs: dogs,
  cats: cats
}

// same as:
// module.exports = {dogs, cats};

// ---------------------------------------------------------------------------------------------------

// Part 3A
const dogs = 'I love dogs!'
const cats = 'I love cats!'

module.exports = dogs
module.exports = cats

// ---------------------------------------------------------------------------------------------------

// Part 4A
const dogs = 'I love dogs!'
const cats = 'I love cats!'

module.exports = {cats};