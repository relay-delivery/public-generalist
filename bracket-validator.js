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

function validateBrackets(s) {
    return validate("[", "]", s);
}

function validateCurly(s) {
    return validate("{", "}", s);
}

function validateParen(s) {
    return validate("(", ")", s);
}

function validate(i, o, s) {
    var brackets = [];
    var ss = s.split("");
    ss.forEach(element => {
        switch (element) {
            case i:
                brackets.push(true);
                break;
            case o:
                if (brackets.length > 0) {
                    brackets.shift();
                    break;
                }
                return false;
            default:
                break;
        }
    });
    if (brackets.length > 0) {
        return false;
    }
    return true;
}
