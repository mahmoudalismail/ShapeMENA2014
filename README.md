ShapeMENA2014
=============

**The backend does not work anymore. The project ended
long time back and the service is off. The code over here is for reference.**

Mobile Application Backend for ShapeMENA2014

API Docs
========
Find all the information below.

Server Docs
--------------

Server IP: ```178.62.95.180:3000```.

You don't need any documentation to connect to the server.

The server is hosted on Digital Ocean and we are running MongoDB. 

Requests
-----------

### Get Contacts 
Make a request to [178.62.95.180:3000/contacts](178.62.95.180:3000/contacts). 

This is what you will receive:

	{contacts:[{
		_id: id for the contact,
		firstName: String,
		lastName: String,
		hub: String,
		occupation: String,
		link: String,
		email: String,
		bio: String,
		title: String,
		}, ...]
	}

### Get Speakers 
Make a request to [178.62.95.180:3000/speakers](178.62.95.180:3000/speakers). 

You will receive all the contacts that will be speakers. 

This is what you will receive:

	{speakers:[{
		_id: id for the contact,
		firstName: String,
		lastName: String,
		hub: String,
		occupation: String,
		link: String,
		email: String,
		bio: String,
		title: String,
		}, ...]
	}

### Get Images 
Make a request to [178.62.95.180:3000/id](178.62.95.180:3000/id). 

Request the above link with the contacts id. 

The way to load the images will be putting the above link in the ```src``` attribute in the ```<img>``` tag. 
