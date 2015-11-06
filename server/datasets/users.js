/**
 * Created by terryshek on 2/11/15.
 */
var mongoose = require("mongoose");
module.exports = mongoose.model('User',{
        email:String,
        password:String

    }
);
