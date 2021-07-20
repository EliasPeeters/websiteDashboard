const express = require('express');

app = express();


let port = 8082;
app.listen(port, () => {
    console.log(`Running on ${port}`)
}) 