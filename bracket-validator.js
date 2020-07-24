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
// '[]]['
// '[[]'



def check(str):
	stack = [] // pop, push
	for s in str:
		if s == '[':
			stack.push(s)
		elif s == ']':
			if not stack.empty():
				stack.pop()
			else return False
	return stack.empty()


// 2 Write another bracket validator function that takes multiple bracket types,
// 		"{}", "[]", and "()". Copy/pasting is encouraged.
// {[}]

// {[]}()
// {[]}()(
// {[}]

def check(str):
	stack = [] // pop, push
	openers = set('[', '{', '[')
	map = {
		']': '[',
		'}': '{',
		')': '(',
	}
	for s in str:
		if s in openers:
			stack.push(s)
		else:
			closer = s // }
			opener = map[s] // {
			if stack.peek() == opener: // [
				stack.pop()
			else return False
	return stack.empty()
