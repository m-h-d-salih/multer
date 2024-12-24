import express from 'express';
import dotenv from 'dotenv';
import  multer  from 'multer'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname+""+Date.now() )
    }
  })
const upload = multer({storage })
const app=express();
dotenv.config();
app.get('/',(req,res)=>{
    res.send(`hello world`)
})
app.post('/api/upload',upload.single('avatar'),(req,res)=>{
    res.json(req.file)
})
const port=process.env.PORT || 4000
app.listen(port,()=>console.log(`server listening on ${port}`))