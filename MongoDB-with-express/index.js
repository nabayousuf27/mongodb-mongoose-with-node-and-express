const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
app.use(express.static(path.join(__dirname, "public")))

app.set("views" , path.join(__dirname,"views"));
app.set("view engine" , "ejs");

main()
    .then(()=>{
        console.log("connection successful")
    })
    .catch(err => {
        console.log(err)
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.get("/",(req,res)=>{
    res.send("root is working");
})

//index rout
app.get('/chats', async (req,res)=>{
    const chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})