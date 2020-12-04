import express from 'express';

// const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, '../build/favicon/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../build')));
// app.use('/', require('./controllers/allControllers.ts')(app));

app.get('/', function (req: express.Request, res: express.Response) {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/api/hello', (req: express.Request, res: express.Response) => {
	res.send({express: 'Hello From Express'});
});

app.post('/api/world', (req: express.Request, res: express.Response) => {
	console.log(req.body);
	res.send(
		`I received your POST request. This is what you sent me: ${req.body.post}`
	);
});

// require('./controllers/allControllers.ts')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
