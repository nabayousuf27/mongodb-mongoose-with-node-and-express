const mongoose = require("mongoose");

//conection

main()
.then(()=>{
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {   
  await mongoose.connect('mongodb://127.0.0.1:27017/test');    //this commands awaits for a promise from database itself , this function is asynchronous method, that takes extra time to execute
}

//Schema

const userSchema = new mongoose.Schema({
  name: String, 
  email: String,
  age: Number,
});

//Models
//    new model instance(user) - mongoose model are basically javascript classes , which are represention of how each  collection document will be looking like 
//const new model = mongoose.model(collection,schemaofthatcollection)
                            //collection,schemaofthat colletion , generally the name of coolcetion and schema are same
const User = mongoose.model("User" ,userSchema);            

//Insert 
//model (user) =its basically a class -> class ki objects create hoti hain -> so for this  user we will crete object and that object will be our document
//model represts a collection , and each object of that model represents a document inside that collection

// const user1 = new User({
//   name: "Naba",
//   email: "naba@yahoo.in",
//   age:18,
// });
// const user2 = new User({
//   name: "Yousuf",
//   email: "ya@yahoo.in",
//   age:18,
// });

// user1.save(); 
// user2.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
// ye save function bhi async function hai , jo ki promise return karta hai , so we can use .then and .catch with it
// user1.save().then(()=>{console.log("data saved")}).catch((err)=>{console.log(err)});

//insert Multiple
User.insertMany([
  {name:"tony" , email:"tony@mail.com" , age:24},
  {name:"shark",email:"tony@mail.com", age:19},
  {name:"bruce",email:"bruce@mail.com", age:19},
]).then((res)=>{
  console.log(res)
});