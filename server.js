var express = require("express"),
    mongoose =require('mongoose'),
    bodyParser = require('body-parser')
    app = express();
mongoose.connect('mongodb://localhost:27017/time-waste')

app.use("/app", express.static(__dirname + "/app"));
app.use("/node_modules", express.static(__dirname + '/node_modules'));



app.listen(3000,function(){
    console.log("connection @port: 3000")
})
app.get("/", function(req, res){
    res.sendfile("index.html")
})
