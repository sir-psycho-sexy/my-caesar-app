const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const PORT = 3001;
const myCaesar = require('./myCaesar')

app.use(function(req, res, next) {  
    let headerOrigin = req.headers.origin;
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin", headerOrigin);
    res.header("Access-Control-Allow-Methods", "POST");
    if(req.method === 'OPTIONS') return res.sendStatus(200);
    next();
 });  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/myCipher', function (req, res, next){
    if(req.body.key === '') return res.send(req.body.message);
    req.shiftBy = myCaesar.myHasherFunction(req.body.key)
    const toEncode = {
        message: req.body.message,
        shiftBy: req.shiftBy,
        mode: req.body.mode[0]
    };
    if (toEncode.mode === "Decipher") {
        toEncode.shiftBy = 26 - toEncode.shiftBy;
    }
    req.ciphered = myCaesar.myCipherFunction(toEncode)
    next();
})

app.use(function (req, res) {
    console.log("Message to encode was: " + req.body.message)
    console.log("Recieved password was: " + req.body.key + "\t-\tto which the generated shift number is: " + req.shiftBy)
    console.log("Selected mode is: " + req.body.mode[0] + "\n")
    res.send(req.ciphered)
})

app.listen(PORT, () => console.log(`Port: ${PORT}`));

module.exports = app;