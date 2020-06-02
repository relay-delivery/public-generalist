// -----------------------
// OBJECT FLATTENER
// -----------------------

// (1 question)

// write a function that takes an object as an input and outputs a new object with no
//		nested objects, only string paths. 

// Example input: 
// const a = {
// 	person: {
//		age: 50,
//		height: {
//			inches: 72,
// 			cm: 183,
//		},
// 	},
//	dog: {
//		age: 10,
// 	},
// };

// Example output:
// {
//	"person.age": 50,
//	"person.height.inches": 72,
//	"person.height.cm": 183,
//	"dog.age": 10,
// }

