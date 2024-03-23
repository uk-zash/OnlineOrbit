const express = require ("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose")
const userRoute  = require("./routes/user")
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/blogs").then ((e) => console.log("MongoDB Connected"));

app.set("view engine" , "ejs")
app.set("views" , path.resolve("./views"));
app.use(express.urlencoded({ extended:false}))

app.get("/", (req , res)=>{
    res.render("home")
})

app.use("/user" , userRoute);

app.listen(PORT , () => console.log( `Server started at port:${PORT}`))