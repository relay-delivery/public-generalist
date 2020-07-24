// -----------------------------
// PROMISES
// -----------------------------
//
// (1 question)
//
// We want to create logs that look like the following for all of our orders:
// 		"cheeseburger from ronaldo's deli delievered at 2020-06-02T15:28:39.361Z by mark ross"
//
// The following methods are available on the database objects (all return Promises):
// 		Order.getAllOrders -- returns all orders
// 		ProducerLocation.getProducerLocationById -- takes a producerLocationId and
//			returns the full producerLocation object
//		Rider.getRiderById -- takes a riderId and returns the full rider object
//
// 1. Write a function that retrieves all of the orders and prints what food was delivered,
// 		from what location, when it was delivered, and by who (see above example string).
// 		Inspect the files in the model folder for details on the schema/data structure.
// 		The function should not print anything until all data is retrieved from the database.



const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.CHAT_DB);

const db = mongoose.connection;

const Order = require('./models/Order');
const ProducerLocation = require('./models/ProducerLocation');
const Rider = require('./models/Rider');

function prettyLogAllOrders () {
	// order item order.food
	// producer location order.producerLocationId
	// order status
	// order delivery time order.deliveredAt
	// rider name (get from ID) order.riderId

	

}

db.once('open', function(){
	console.log('mongoose connection open');
	prettyLogAllOrders();
});

db.on('error', function(err){
	console.error(`mongoose connection error: ${err.message}`);
	console.error(err);

	process.exit(1);
});
