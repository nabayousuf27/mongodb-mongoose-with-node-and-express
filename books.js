const mongoose = require("mongoose");

main()
.then(()=>{
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {   
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//schema // Schema Validation 
const bookSchema = new mongoose.Schema({
    // title: String,
    title: {
        type : String,
        required : true,
    },
    author:{
        type : String,
    },
    price : {
        type:Number,
        min:1,
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","nonfiction"],
    },
    genre:[String],
});

//model //collection form
const Book = mongoose.model("Book",bookSchema);

// let book1 =  new Book({
//     title : "Mathematics XII",
//     autho : "unknown",
//     price : "500",
// })
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// let book2 =  new Book({
//     title : "Silent Patient",
//     author : "Alex Michaelide",
//     price : "200",
// })
// let book3 =  new Book({
//     title : "Silent Patient 2",
//     author : "Alex Michaelide",
//     price : "300",
//     category:"fiction",
// })

// let book4 =  new Book({
//     title : "Silent Patient 2",
//     author : "Alex Michaelide",
//     price : "300",
//     category:"fiction",
//     genre: ["thrill","suspense","Mystery","crime fiction"],
// })

// book4.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//updation //this works fine
// Book.findByIdAndUpdate("68cc65b5303c5be6b2b76a80",{price:-500}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//this will show error
Book.findByIdAndUpdate("68cc65b5303c5be6b2b76a80",{price:-100},{runValidators: true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})