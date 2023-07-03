import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import multer from 'multer';
import mysql from 'mysql';
import csv from 'fast-csv';
import fs from 'fs';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Multer configuration
let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

let upload = multer({ 
  storage: storage
});

// Create the connection
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "exceldb",
});

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/import-csv", upload.single("file"), (req, res) => {
  console.log(req.file.path);
  uploadCsv(__dirname + "/uploads/" + req.file.filename)
  res.send("Records imported!");
});

function uploadCsv(path){
    let stream = fs.createReadStream(path)
    let csvDataColl=  [];
    let fileStream = csv
    .parse()
    .on("data", function(data){
        csvDataColl.push(data)
    })
    .on("end", function(){
        csvDataColl.shift();

        pool.getConnection((error, connection) => {
            if(error){
                console.log(error)
            }
            else{
                let query = "INSERT INTO users (Name, Age, Country) VALUES ?"
                connection.query(query,[csvDataColl], (error, res) => {

                })
            }
        })
        fs.unlinkSync(path)
    })

    stream.pipe(fileStream);

}

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
