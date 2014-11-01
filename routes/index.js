var express = require('express');
var router = express.Router();
var Contacts = require('../models/contacts.js');
var Images = require('../models/images.js');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res) {
  res.send("Welcome to ShapeMENA2014, you accessed our backend!")
});


/* GET contacts */

router.get('/contacts', function(req, res){

	Contacts.find({}, '-image', function(err, response){
		res.send({contacts: JSON.stringify(response)});
	});
});

/* GET speakers */
router.get('/speakers', function(req, res){

	Contacts.find({'speaker': 'True'}, function(err, response){
		res.send({speakers: JSON.stringify(response)});
	});
});

/* GET images */

router.get('/:id', function(req, res){
	Images.findOne({'person': req.param('id')}, 'image',function(err, img){
	    if (err)
	      res.send("Error getting the image");
	    else
	      res.contentType(img.image.mimeType);
	      res.send(img.image.data);
	    });
});

module.exports = router;
