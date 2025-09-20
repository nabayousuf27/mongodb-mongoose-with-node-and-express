const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let allChats = [
 {
    from: "Naba",
    to: "Saba",
    msg: "Hey Saba! Long time no see",
    created_at: new Date(),
  },
  {
    from: "Saba",
    to: "Ali",
    msg: "Can you share the project files?",
    created_at: new Date(),
  },
  {
    from: "Ali",
    to: "Sara",
    msg: "Are you free this weekend?",
    created_at: new Date(),
  },
  {
    from: "Sara",
    to: "Hassan",
    msg: "Did you finish the assignment?",
    created_at: new Date(),
  },
  {
    from: "Ayesha",
    to: "hussain",
    msg: "Good luck for your exam",
    created_at: new Date(),
  },
]
Chat.insertMany(allChats);