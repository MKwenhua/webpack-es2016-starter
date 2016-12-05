const express      = require('express');
const fs           = require('fs');
const ejs          = require('ejs');
const app          = new express();
const bodyParser   = require('body-parser');
const http         = require('http');
const path         = require('path');
const env          = process.env;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.enable('trust proxy');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.get('/', (req,res) => {
	res.render('index', {
		ulTitle: 'The Most Intelligent <i>Animals</i> Listed Below',
		gifurl: 'images/cockatoo.gif'
	});
});
app.get('/videos', (req,res) => {
	res.render('videos');
});

let server = app.listen(env.NODE_PORT || 8000, env.NODE_IP || 'localhost', () => {
	console.log('At the URL: http://localhost:8000');
})
