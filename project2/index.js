const express = require('express');
const csv = require('fast-csv');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const mysql = require('mysql');


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// multer config

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, "./uploads/")
    },
    filename:(req,file,callback)=>{
        callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({
    storage:storage
})

// Create connection

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"csv_file_data"
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.post('/import-csv', upload.single('import-csv'),(req, res)=>{
    console.log(req.file.path)
    uploadCsv(__dirname + "/uploads/" + req.file.filename)
    res.send("Records inputed!")
})

function uploadCsv(path){
    console.log(path)
    let stream = fs.createReadStream(path)
    let csvDataColl = []
    let fileStream = csv
    .parse()
    .on('data', function(data){
        csvDataColl.push(data)
    })
    .on('end', function(){
        csvDataColl.shift()
        pool.getConnection((error, connection)=>{
            if(error){
                console.log(error)
            }else{
                let query = "INSERT INTO users (Name,Age,Country) VALUES ?"
                connection.query(query, [csvDataColl],(error, res)=>{
                    console.log(error || res);
                })
            }
        })

        fs.unlinkSync(path);
    })

    stream.pipe(fileStream);
}


app.listen(5000, ()=> console.log("Listening on port 5000..."))