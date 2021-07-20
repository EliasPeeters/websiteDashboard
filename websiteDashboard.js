const express = require('express');
const fs = require('fs');
const mysql = require('mysql')


// read credentials
let credentials = JSON.parse(fs.readFileSync('credentials.json'));
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


app = express();


let port = 8082;
app.listen(port, () => {
    console.log(`Running on ${port}`)
}) 