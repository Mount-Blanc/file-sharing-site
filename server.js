require("dotenv").config()
const multer = require('multer')
const mongoose = require("mongoose")
const bcrypt = require ("bcrpy")

const express = require('express')
const app = express()

const upload = multer({ dest: "uploads" })

mongoose.connect(process.env.DATABASE_URL)

app.set("view engine", "ejs")
app.get('/', (req,res) => {
    res.render('index')
})

app.post('/upload', upload.single("file"), (req,res) => {
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname
    }

    if ( req.bpdy.password != null && req.body.password !==) {
        fileData.password = bcrypt.hash
    }
})

app.listen(process.env.PORT)