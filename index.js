const express = require('express');
const app = express();
const port = 1234;
app.set('view engine', 'ejs');
app.listen(port, function(){
    console.log(`Hello World!`);
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/tam-sinh-ly', function(req, res){
    res.send("Hello tam sinh ly!");s
});

app.get('/welcome', function(req, res){
   res.send("Hello" + req.query.name);
});
app.get('/demo', function(req, res){
    res.send("Hello" + req.query.name);
});

app.post('/welcome', function(req, res){
    res.send("Full name: " + req.body.fullname + "<br>" + "User name: " + req.body.username + "<br>" + "Password: " + req.body.password);
});

app.get('/register', function(req, res){
    res.render('register');
});
app.post('/register', function(req, res){
    res.send("Full name: " + req.body.fullname + "<br>" + "User name: " + req.body.username + "<br>" + "Password: " + req.body.password);
});

