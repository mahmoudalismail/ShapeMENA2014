var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var imagesSchema = new Schema ({
	person: {type: Schema.Types.ObjectId, ref: 'Contacts'},
	image: {data: Buffer,
			mimeType: String
	}
});

module.exports = mongoose.model('Images', imagesSchema);

