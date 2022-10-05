const bodyParser = require('body-parser');

const express=require("express")
const multer=require('multer');
const { Product } = require('./model');

app.use(express.static('images'))

const app=express()

const dburl='mongodb+srv://Abdullahkhan:K_khpz-5MaFahKw@cluster0.djcgmq9.mongodb.net/Productuploader';
mongoose.connect(dburl).then((result)=>app.listen(7000,()=>{console.log("the app is working")})).catch((err)=>console.log(err))



const upload=multer({dest:'./images'})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// const fileStorgaeEngine =multer.diskStorage({destination:(req,file,cb)=>{
//     cb(null,'./images')
// },
// filename:(req,file,cb)=>{
//     cb(null,Date.now()+'--'+ file.originalname)
// }})
// const upload=multer({storage:fileStorgaeEngine})

// app.post('/single',upload.single('image'),(req,res)=>{
//     console.log(req.file)
//     res.send("single file uploaded successfully")
// })

app.post('/single',upload.single('productImage'),(req,res)=>{
 console.log(req.file)
    const prodect=new Product({name:req.body.name,
                   productType:req.body.productType})
    prodect.save().then((result)=>{res.send(result)}).catch((err)=>res.send(err))
    })

