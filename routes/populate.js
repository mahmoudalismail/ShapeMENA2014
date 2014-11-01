var express = require('express');
var router = express.Router();
var Contacts = require('../models/contacts.js');
var Images = require('../models/images.js');
var mongoose = require('mongoose');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.send("Welcome to ShapeMENA2014, you accessed our backend population!")
});

/* GET adds contacts to the db */

router.get('/fillContact', function(req, res){
	
	var contact = new Contacts({
		'firstName': 'Zaid',
    	'lastName': 'Haque',
    	'hub': 'Jordan',
    	'occupation': 'Qatar Airways',
    	'link': 'www.mahmoudalismail.com',
    	'email': 'zaidhaque@gmail.com',
    	'bio': 'Designer',
    	'title': 'CEO',
	});

	contact.save(function (err, a) {
      if (err) console.log("ERROR\n\n\n\n");
      else
      res.send("You saved a contact successfuly!");
  	});

});

router.get('/fillImage', function(req, res){

	var imgPath = "/Users/mahmoudalismail/Projects/ShapeMENA2014/public/images/profilePhoto.jpg";


	var make = Contacts.findOne({'firstName': 'Zaid'}, function(err, contact){
		console.log("contact: ",contact.firstName);
		
		var image = new Images({
			'person': contact,
			'image': {
				"data": fs.readFileSync(imgPath),
				"mimeType": "image/jpg"}
		});

		image.save(function (err, a) {
      		if (err) console.log("ERROR\n\n\n\n");
      		else
      		res.send("You saved a image successfuly!");
  		});
	});
});

module.exports = router;
