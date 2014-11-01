var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var contactsSchema = new Schema ({
	firstName: String,
	lastName: String,
	hub: String,
	occupation: String,
	link: String,
	email: String,
	bio: String,
	title: String,
	speaker: Boolean,
	image: {type: Schema.Types.ObjectId, ref: 'Images'}
});

module.exports = mongoose.model('Contacts', contactsSchema);

