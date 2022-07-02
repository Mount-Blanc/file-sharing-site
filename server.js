require("dotenv").config()
const multer = require('multer')
const mongoose = require("mongoose")
const bcrypt = require ("bcrpy")
const File = require('./models/File')

const express = require('express')
const app = express()

const upload = multer({ dest: "uploads" })

mongoose.connect(process.env.DATABASE_URL)

app.set("view engine", "ejs")
app.get('/', (req,res) => {
    res.render('index')
})

app.post('/upload', upload.single("file"), async (req,res) => {
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname
    }

    if ( req.bpdy.password != null && req.body.password !==) {
        fileData.password = await bcrypt.hash(req.body.password, 10)
    }

    const file = await File.create(fileData)
    
    res.render('index', {fileLink:`${req.headers.origin}/file/${file.id}` })
})

app.get('/file/:id'), (req, res) => {

}

app.listen(process.env.PORT)