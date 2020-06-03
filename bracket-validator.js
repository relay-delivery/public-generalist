// -----------------------------
// BRACKET VALIDATOR
// -----------------------------

// (2 questions)

// 1 Write a bracket validating function that takes a string and returns a
//		Boolean if every opening bracket both has a closing bracket and comes
//		before the closing bracket. Assume only one type of bracket.

// VALID BRACKET STRINGS:
// '[]'
// '[[[]]]'

// INVALID BRACKET STRINGS:
// ']['
// '[[]'

// 2 Write another bracket validator function that takes multiple bracket types,
// 		"{}", "[]", and "()". Copy/pasting is encouraged.

function validateBrackets(inString) {
    const inArr = inString.split('');
    let counter = 0;

    for(let i = 0; i < inArr.length; i++) {
        const char = inArr[i];

        if(char === '[') {
            counter++;
        } else if(char === ']') {
            counter--;
        }

        if(counter < 0) {
            return false;
            break;
        }
    };

    if(counter === 0) {
        return true;
    }
}