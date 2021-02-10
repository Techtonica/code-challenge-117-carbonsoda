// ## Array Intersection
//
// _Idea from_ _[lodash _.intersection](https://lodash.com/docs/4.17.15#intersection)_
//
// Given two arrays, find the item(s) that are present in both.
//
// ```
// `let a = ['A', 'B', 'Z']
// let b = ['Z', 'X', 'Y']
//
// intersection(a, b)
// _// => ['Z']_`
//
// ```
//
// To get it working, don't worry about efficiency. Later we'll learn about specialized data structures that make this simpler/efficient.

function intersection(a, b){
  // This isn't efficent because it requires looping b multiple times 
  // for a total runtime of O(n^2)
  // but it fits challenge of being a one-liner
  return(a.filter(x => b.includes(x)));
}

module.exports = intersection;
