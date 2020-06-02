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

function bracketValidator (str) {

}

// use this code to test
const testBrackets = {
	'[]': true,
	'[[[]]]': true,
	'[[]': false,
	'][': false,
};

Object.keys(testBrackets).forEach(bracketStr => {
	if (testBrackets[bracketStr] !== bracketValidator(bracketStr)) {
		console.log(`VALIDATOR: ${bracketStr} is ${testBrackets[bracketStr] ? '' : 'NOT'} valid.`);
	}
});

// 2 Write another bracket validator function that takes multiple bracket types,
// 		"{}", "[]", and "()". Copy/pasting is encouraged.

function multiBracketValidator (str) {

}

// more test code
const multiTestBrackets = {
	'{[([{}])]}': true,
	'[]': true,
	'}{[()]})': false,
};

Object.keys(multiTestBrackets).forEach(bracketStr => {
	if (multiTestBrackets[bracketStr] !== multiBracketValidator(bracketStr)) {
		console.log(`VALIDATOR: ${bracketStr} is ${multiTestBrackets[bracketStr] ? '' : 'NOT'} valid.`);
	}
});
