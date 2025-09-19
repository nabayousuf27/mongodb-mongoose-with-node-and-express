//basic model setup

const mongoose = require("mongoose");

//chat schema
const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        require: true
    },
    to:{
        type:String,
        require: true
    },
    msg:{
        type:String,
        maxLength :50
    },
    created_at:{
        type:Date
    }
});

//create model
const Chat  = mongoose.model("Chat",chatSchema);

module.exports = Chat;