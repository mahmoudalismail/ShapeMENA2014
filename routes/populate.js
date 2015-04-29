var express = require('express');
var router = express.Router();
var Contacts = require('../models/contacts.js');
var Images = require('../models/images.js');
var mongoose = require('mongoose');
var fs = require('fs');
var lazy = require("lazy");
// You will not find this file
var data_to_include = require("./database_v1.0")


/* GET adds the speakers to the database */
router.get('/fillReadData', function(req, res){
  
  for (var i=0; i<data_to_include.data_to_import.length; i++){
    if (data_to_include.data_to_import[i].speaker == "" ||
      data_to_include.data_to_import[i].speaker == "FALSE") {
      data_to_include.data_to_import[i].speaker = false;
    }
    else{
      data_to_include.data_to_import[i].speaker = true;
    }
    var contact = new Contacts(
        data_to_include.data_to_import[i]
    );

    contact.save(function (err, a) {
        if (err) console.log("ERROR\n\n\n\n");
        else
        res.send("You saved a contact #"+i+"successfuly!");
      });
  }
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
      if (err) console.log("ERROR adding a contact to database!\n");
      else
      res.send("You saved a contact successfuly!");
  	});

});

router.get('/fillImage', function(req, res){

	var imgPath = "/Users/mahmoudalismail/Desktop/ShapeMENA_data/portraits/";

	var make = Contacts.find({'speaker': 'true'}, function(err, contacts){
    if (err) {
      res.send("Error finding the speaker!\n")
    }

    
    for (var i=0; i<contacts.length;i++){
      personPath = imgPath+contacts[i].firstName+" "+contacts[i].lastName+".jpg"

      // to manually see if filenames need to be edited 
      if (fs.existsSync(personPath)) {
        console.log("[TRUE]"+contacts[i].firstName+" "+contacts[i].lastName+" has a picture in the available")
        // saveImage(personPath, contacts[i])
        console.log("ID: "+contacts[i].id);
      }
      else {
        console.log("[FALSE]"+contacts[i].firstName+" "+contacts[i].lastName+" has no picture in the available")
        // saveImage(imgPath+"unknown-person.jpg", contacts[i])
      }
      
    }

	});
});

// saves jpg images 
function saveImage(path, contact) {
  
  var image = new Images({
     'person': contact,
     'image': {
       "data": fs.readFileSync(path),
       "mimeType": "image/jpg"}
    });

    image.save(function (err, a) {
         if (err)
          res.send("Error saving the image\n");
         
         else
          res.send("You saved a image successfuly!");
     });
}

module.exports = router;
