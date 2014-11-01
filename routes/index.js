var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("Welcome to ShapeMENA2014, you accessed our backend!")
});

/* GET images */

router.get('/:id', function(req, res){
	res.send("You requested to load an image");
});

/* GET contacts */

router.get('/contacts', function(req, res){
	res.send("You requested to all the contacts");
});

/* GET speakers */
router.get('/speakers', function(req, res){
	res.send("You requested to load all the speakers");
});

module.exports = router;
