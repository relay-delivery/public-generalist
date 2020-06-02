// -----------------------------
// PROMISES
// -----------------------------
//
// (1 question)
//
// We want to create logs that look like the following for all of our orders:
// 		"cheeseburger from ronaldo's deli delievered at (date obj here) by mark ross"
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
	Order.getAllOrders()
		.then(orders => {
			let riders = [];
			let producers = [];

			for(let order of orders) {
				riders.push(order.riderId);
				producers.push(order.producerLocationId);
			}

			riders = riders.map(i => Rider.getRiderById(i));
			producers = producers.map(i => ProducerLocation.getProducerLocationById(i));

			Promise.all([Promise.all(riders), Promise.all(producers)]).then(e => {
				let riderMap = {};
				let prodMap = {};

				for(let rider of e[0]) {
					riderMap[rider.riderId] = rider;
				}

				for(let producer of e[1]) {
					prodMap[producer.producerLocationId] = producer;
				}

				for(let order of orders) {
					let food = order.food;
					let loc = prodMap[order.producerLocationId].name;
					let date = order.deliveredAt;
					let rider = riderMap[order.riderId].name;
					console.log(
						food +
						" from " +
						loc +
						" delievered at " +
						date +
						" by " +
						rider);
				}
			});
		})
		.catch(err => {
			console.error(err);
		});
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
