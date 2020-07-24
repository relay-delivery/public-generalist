const assert = require('assert');
// -----------------------------
// BRACKET VALIDATOR
// -----------------------------

// (2 questions)

// 1 Write a bracket validating function that takes a string and returns a
//		Boolean if every opening bracket both has a closing bracket and comes
//		before the closing bracket. Assume only one type of bracket.

// VALID BRACKET STRINGS:
// '[]'
// '[[[][]]]'

function validate(input) {
  const ltype = ['[','(','{'];
  const rtype = [']',')','}'];
  let lcount = 0;
  let rcount = 0;

  for(let i = 0; i < input.length ; i++) {
    if(lcount < rcount){
      return false;
    }

    if(ltype.indexOf(input[i]) !== -1) {
      lcount++;
    }
    
    if(rtype.indexOf(input[i]) !== -1) {
      rcount++; 
    }
  }

  console.log(input);
  console.log('lcount', lcount, 'rcount', rcount);
  return rcount === lcount;
}

assert(validate('[][]') == true);
assert(validate('{}{}') == true);
assert(validate('[]') == true);
assert(validate('()') == true);
assert(validate('[[[][]]]') == true);

assert(validate('][') == false);
// assert(validate('}(') == false);
assert(validate('[[]') == false);

// INVALID BRACKET STRINGS:
// ']['
// '[[]'

// 2 Write another bracket validator function that takes multiple bracket types,
// 		"{}", "[]", and "()". Copy/pasting is encouraged.
