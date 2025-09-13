const mongoose = require("mongoose");

//conection

main()
.then(()=>{
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {   
  await mongoose.connect('mongodb://127.0.0.1:27017/test');    //this commands awaits for a promise from database itself , this function is asynchronous method, that takes extra tiw to execute
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

