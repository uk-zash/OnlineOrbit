const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb+srv://onlineorbitt:Ti37yGR35w4nKVJA@cluster0.10uvucz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

connect.then(()=>{
    // console.log("Database Connecctedd")
});

const clientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    number:{
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},

    {timestamps: true}
)

const message = new mongoose.model("user",clientSchema)
module.exports = message;