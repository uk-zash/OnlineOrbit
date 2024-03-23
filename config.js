const mongoose = require("mongoose")
const connect = mongoose.connect(process.env.MONGO_URL)

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