const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// read credentials
credentials = JSON.parse(fs.readFileSync('credentials.json'));
console.log('Reading credentials successful')

connection = mysql.createConnection({
	host: 'server.eliaspeeters.de',
	user: credentials.database.username,
	password: credentials.database.password,
	database: 'website'
});

connection.connect((err) => {
	if (err) {
		console.log(err)
        return false
	} else {
		console.log('Conntected to Database');
        return true
	}
});

logins = []

app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())



let loginRoute = require('./routes/login')
let homeRoute = require('./routes/home')

let port = 8082;
app.listen(port, () => {
    console.log(`Running on ${port}`)
}) 