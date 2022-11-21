const mongoose= require('mongoose')

const connurl='mongodb+srv://Harthik:1234@cluster0.za9ck1n.mongodb.net/task_manager?retryWrites=true&w=majority'

 const connectdb= async()=>{
    try {
        const conn= await mongoose.connect(connurl)
    } catch (error) {
        console.log(error);
    }
 }

 module.exports=connectdb