const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const riderSchema = new Schema ({
	riderId: {
		type: String,
		requried: true,
	},
	name: String,
}, { usePushEach: true });

riderSchema.statics.getRiderById = function (riderId) {
	return this.findOne({ riderId }).lean();
}

module.exports = mongoose.model('r', riderSchema);;
