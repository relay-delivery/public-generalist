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



function getFlattenedObject(obj) {
    const flattened = {};

    const flattenObject = function(inObj, path = '') {
        inObj.forEach((key) => {

            path += '.' + key;
            // If there are no objects below, we are done.
            if(Object.keys(inObj[key]).length === 0) {
                flattened[path] = inObj[Object.keys[0]];
            } else {
                flattenedObject(inObj[key], path);
            }
        });
    }

    flattenObject(obj, '');

    return flattened;
}