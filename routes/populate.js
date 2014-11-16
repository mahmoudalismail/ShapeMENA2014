var express = require('express');
var router = express.Router();
var Contacts = require('../models/contacts.js');
var Images = require('../models/images.js');
var mongoose = require('mongoose');
var fs = require('fs');
var lazy = require("lazy");

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.send("Welcome to ShapeMENA2014, you accessed our backend population!")
// });

/* GET adds the speakers to the database */
router.get('/fillReadData', function(req, res){
  console.log("HELLO\n");
  
  new lazy(fs.createReadStream('/Users/mahmoudalismail/Projects/ShapeMENA2014/routes/speakers-v1.csv')).lines.forEach(function(line){
         console.log(line.toString().split(","));

        var person = line.toString().split(",");
        console.log(person);
        
        var contact = new Contacts({
          'firstName': person[0],
          'lastName': person[1],
          'title': person[2],
          'company': person[3]
          // 'hub': 'Lebanon',
          // 'occupation': ,
          // 'link': 'www.mahmoudalismail.com',
          // 'email': 'zaidhaque@gmail.com',
          // 'bio': 'yes',
          // 'speaker': true
        });

        contact.save(function (err, a) {
            if (err) console.log("ERROR\n\n\n\n");
            else
            res.send("You saved a contact successfuly!");
          });
  });

});
/* GET adds contacts to the db */

router.get('/fillContact', function(req, res){
	
	var contact = new Contacts({
		'firstName': 'Waleed',
    'lastName': 'Airy',
    'hub': 'Lebanon',
    'occupation': 'PIMP',
    'company': "Dettol",
    'link': 'www.mahmoudalismail.com',
    'email': 'zaidhaque@gmail.com',
    'bio': 'yes',
    'title': 'Sanitizer',
    'speaker': true
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
