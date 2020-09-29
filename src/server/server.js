const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const mkdirp = require('mkdirp');
const app = express();
const apiPort = 3000;
const router = require("./routes/routes");
const path = require('path');
const firebase = require('./firebase');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

app.post('/api/login', (req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    let ref = firebase.database().ref('users/' + username).once('value').then((snapshot) => {
        if(snapshot.val()) {
            if(password === snapshot.val().password) {
                res.json({success: true});
            }
            else {
                res.json({success: false});
            }
        }
    });
});

app.post('/api/create', (req, res) => {
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    firebase.database().ref('/users/' + username).once('value', snapshot => {
        if(snapshot.exists()) {
            res.json({sucess: false, message: "Username with email already exists"});
        }
    });
    firebase.database().ref().child('users/' + username).update({email: email, password: password, username: username});
    res.json({sucess: true});
});
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
module.exports = app;

