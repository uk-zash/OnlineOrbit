const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb+srv://doadmin:y64TVe28Ab9157Hv@onlineorbitt-01353bee.mongo.ondigitalocean.com/admin?authSource=admin&tls=true")

connect.then(()=>{
    console.log("Database Connecctedd")
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