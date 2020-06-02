const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producerLocationSchema = new Schema ({
	producerLocationId: {
		type: String,
		requried: true,
	},
	name: String,
}, { usePushEach: true });

producerLocationSchema.statics.getProducerLocationById = function (producerLocationId) {
	return this.findOne({ producerLocationId }).lean();
}

module.exports = mongoose.model('pl', producerLocationSchema);;
