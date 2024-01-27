const express = require('express');
const app = express();
const path = require("path");
require("dotenv").config()

const port =  process.env.port;
const multer = require("multer")
const message = require("./config");
const { Collection } = require('mongoose');
const nodemailer = require("nodemailer");
const blog = require("./blog");
const Blog = require('./blog');
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const Comment = require("./comment")


app.use(express.static(path.resolve('./public')));
app.use('/public/style', express.static('public/style', { 'extensions': ['css'], 'index': false }));


// Your routes and other configurations will go here
// Add this route to app.js or index.js
app.get('/', (req, res) => {
    res.render('home');
  });
app.get('/app-dev', (req, res) => {
    res.render('app-dev');
  });
app.get('/web-dev', (req, res) => {
    res.render('web-dev');
  });
app.get('/dig-mark', (req, res) => {
    res.render('dig-mark');
  });
app.get('/e-com', (req, res) => {
    res.render('e-com');
  });
app.get('/contact', (req, res) => {
    res.render('contact');
  });
app.get('/privacy', (req, res) => {
    res.render('privacy');
  });

  const storage = multer.diskStorage({
    destination: function(req , file , cb){
      cb(null , path.resolve(`./public/upload/`))
    },
    filename: function (req , file , cb){
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null , fileName);
    }
  });
  const upload = multer({storage:storage});
  app.get('/blog', async (req, res) => {
    const allBlogs = await blog.find({});
    res.render('blog',{
      Blogs: allBlogs,
    });
  
  });

  app.get("/blog/:id" , async (req , res) => {
    const blogg = await blog.findById(req.params.id);
    const comments = await Comment.find({ blogId: req.params.id})
    // console.log(blogg)
    console.log(comments)
    return res.render('blog-view' ,{
        blogg,
        comments
    })
  })
app.get('/blog1',(req, res) => {
  res.render('blog1')
  });

  app.post("/comment/:blogId" , async (req , res)=>{
   await Comment.create ({
        content: req.body.content,
        blogId: req.params.blogId
  })
    return res.redirect(`/blog/${req.params.blogId}`)
})

app.post('/blog1', upload.single("coverImage"), async (req, res) => {
  const {title , body , createdBy} = req.body
  const Blog = await blog.create({
    body,
    title, 
    createdBy,
    coverImageURL: `upload/${req.file.filename}`
  })
    res.redirect('blog');
  });
app.get('/aboutus', (req, res) => {
    res.render('aboutus');
  });

  app.post("/contact", async (req, res) => {
    try { const data = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        message: req.body.message
      };
  
      const clientData = await message.insertMany(data);
      console.log("Data saved to database:", clientData);
  
      // Send success response after both email and database operations
      res.render("home");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("error");
    }
  });



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
