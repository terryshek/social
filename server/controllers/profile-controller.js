/**
 * Created by terryshek on 6/11/15.
 */
var User = require("../datasets/users");
var fs =require("fs-extra");
var path = require("path")
module.exports.updatePhoto = function(req,res){
    var file = req.files.file;
    var userId = req.body.userId;
    console.log("User" + userId + " is submitting ", file)
    var tempPath = file.path;

}
