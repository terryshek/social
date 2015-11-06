var express = require("express"),
    mongoose =require('mongoose'),
    bodyParser = require('body-parser'),
    multipart = require("connect-multiparty"),
    multipartMiddleWare = multipart(),
    app = express(),
    authenticationController = require("./server/controllers/authentication-controller"),
        profileController = require("./server/controllers/profile-controller");


mongoose.connect('mongodb://localhost:27017/time-waste')
app.use(bodyParser.json());
app.use(multipartMiddleWare);
app.use("/app", express.static(__dirname + "/app"));
app.use("/node_modules", express.static(__dirname + '/node_modules'));


app.get("/", function(req, res){
    res.sendfile("index.html")
})
// authenticate
app.post("/api/user/signup", authenticationController.signup);
app.post("/api/user/login", authenticationController.login);
//profile
app.post("/api/profile/edit", multipartMiddleWare, profileController.updatePhoto);

app.listen(3000,function(){
    console.log("connection @port: 3000")
})
