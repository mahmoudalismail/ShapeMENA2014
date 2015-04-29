var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var contactsSchema = new Schema ({
	firstName: String,
	lastName: String,
	hub: String,
	company: String, // attach organization
	link: String,
	email: String,
	bio: String,
	occupation: String,
	speaker: Boolean,
	title: String,
	organization: String,
	image: {type: Schema.Types.ObjectId, ref: 'Images'}
});

module.exports = mongoose.model('Contacts', contactsSchema);

