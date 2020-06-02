// -----------------------------
// MERCURY
// -----------------------------
//
// (2 questions)
//
// RELAY has the above data structure for messages. Each message has a reference
// 		to its parent, or null if it is the first message in a chain of messages.
// 		We want to view a chain or thread of messages so we can see full
//		conversations. The messages are stored in an array along with messages
// 		from other conversations, and are not in chronological order.

// 1 Write a function that takes the an array of messages  and the following UID and returns
// 		an array that deeply equals the idealMessageChain array.
//
// 		UID: 'l42f432lk4l999sdj'

const idealMessageChain = [
	{
		uid: 'anjasd8ds7fnmsdf8',
		parent: null,
		body: 'driver gave me the finger',
		subject: 'unprofessional delivery guy',
		to: 'relay',
		from: 'justsalad12',
	},
	{
		uid: '9807dsfkln3l23lkj',
		parent: 'anjasd8ds7fnmsdf8',
		body: 'can you tell us which rider or which order he took?',
		subject: 'RE: unprofessional delivery guy',
		to: 'justsalad12',
		from: 'relay',
	},
	{
		uid: '32jkhfsejskldnf888888',
		parent: '9807dsfkln3l23lkj',
		body: 'hold on',
		subject: 'RE: unprofessional delivery guy',
		to: 'relay',
		from: 'justsalad12',
	},
	{
		uid: 'l42f432lk4l999sdj',
		parent: '32jkhfsejskldnf888888',
		body: 'yes he took the order for aaron b',
		subject: 'RE: unprofessional delivery guy',
		to: 'relay',
		from: 'justsalad12',
	},
	{
		uid: '9djdk5443943kjds843',
		parent: 'l42f432lk4l999sdj',
		body: 'ok we will reach out to the rider about his behavior, please rate him 1 stars and he will nto be dispatched to your store again',
		subject: 'RE: unprofessional delivery guy',
		to: 'justsalad12',
		from: 'relay',
	},
];

const allMessages = [
	{
		uid: '9807dsfkln3l23lkj',
		parent: 'anjasd8ds7fnmsdf8',
		body: 'can you tell us which rider or which order he took?',
		subject: 'RE: unprofessional delivery guy',
		to: 'justsalad12',
		from: 'relay',
	},
	{
		uid: '32nkjlfdkjh98032jdfmk8976',
		parent: null,
		body: 'WHY IS OUR FEE SO LOW HOW CAN U B MAKING MONEYYYY',
		subject: 'FEE',
		to: 'relay',
		from: 'baladeyourmom',
	},
	{
		uid: 'l42f432lk4l999sdj',
		parent: '32jkhfsejskldnf888888',
		body: 'yes he took the order for aaron b',
		subject: 'RE: unprofessional delivery guy',
		to: 'relay',
		from: 'justsalad12',
	},
	{
		uid: '9djdk5443943kjds843',
		parent: 'l42f432lk4l999sdj',
		body: 'ok we will reach out to the rider about his behavior, please rate him 1 stars and he will nto be dispatched to your store again',
		subject: 'RE: unprofessional delivery guy',
		to: 'justsalad12',
		from: 'relay',
	},
	{
		uid: '9dskj3209dskjn32323232323232',
		parent: '32nkjlfdkjh98032jdfmk8976',
		body: 'we will get back to you about this',
		subject: 'RE: FEE',
		to: 'baladeyourmom',
		from: 'relay',
	},
	{
		uid: 'anjasd8ds7fnmsdf8',
		parent: null,
		body: 'driver gave me the finger',
		subject: 'unprofessional delivery guy',
		to: 'relay',
		from: 'justsalad12',
	},
	{
		uid: '32jkhfsejskldnf888888',
		parent: '9807dsfkln3l23lkj',
		body: 'hold on',
		subject: 'RE: unprofessional delivery guy',
		to: 'relay',
		from: 'justsalad12',
	},
	// a bunch of other messages...
];


function threadBuilder (messagesArr, uid) {

}

// use this code to test -- no logs are good
const result = threadBuilder(allMessages, 'l42f432lk4l999sdj');
result.forEach((message, i) => {
	Object.keys(message).forEach(key => {
		if (message[key] !== idealMessageChain[i][key]) {
			console.log(`VALIDATOR: value for ${key} does not match for message ${message.uid}`)
		}
	});
});

// 2 given that we want to read message THREADS, and not just individual messages
// 		suggest a new data structure for our messaging service
