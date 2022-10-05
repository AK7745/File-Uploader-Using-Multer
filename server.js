
const express=require("express")
const multer=require('multer')
const path=require("path")
const app=express()

// Storage Engine 
const Storage=multer.diskStorage({destination:'./images',
filename:(req,file,cb)=>{
    cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
}

})

const upload=multer({storage:Storage},)
app.use('/profile',express.static('./images'))
app.post('/single',upload.single('image'),(req,res)=>{
    console.log(req.file)
    res.json({
        success:1,
        profile_url: `http://localhost:4000/profile/${req.file.filename}`
    })
})

app.listen(4000,(res,req)=>console.log('the server is working properly'))



// const fileStorgaeEngine =multer.diskStorage({destination:(req,file,cb)=>{
//     cb(null,'./images')
// },
// filename:(req,file,cb)=>{
//     cb(null,Date.now()+'--'+ file.originalname)
// }})



// app.use(express.static('images'))
