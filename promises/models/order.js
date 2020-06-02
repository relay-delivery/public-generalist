const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
	orderId: {
		type: String,
		required: true,
		unique: true,
	},
	food: [ String ],
	producerLocationId: {
		type: String,
		required: true,
	},
	riderId: String,
	deliveredAt: Date,
}, { usePushEach: true });

orderSchema.statics.getAllOrders = function () {
	return this.find({}).lean();
}

module.exports = mongoose.model('o', orderSchema);;
