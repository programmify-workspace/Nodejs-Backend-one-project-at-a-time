const connection = require("../database/config")
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
    }
});
  

module.exports = {
    getAllUsers: (req,res)=>{
        connection.query("SELECT * FROM users", (error, result) => {
            if (error) {
              console.log(error);
            } else {
            const allUsers = result;
                res.render('compose',{allUsers});
            }
            
        });
        
    },
    sendEmail: (req, res) => {
        const { subject, message } = req.body;    
    
        connection.query("SELECT * FROM users", async (error, result) => {
            if (error) {
                console.log(error);
                res.redirect('/');
            } else {
                const emails = result.map((row) => row.email);
                console.log(emails)
                try {
                    const info = await transporter.sendMail({
                        from: process.env.SMTP_USER,
                        to: emails,
                        subject: subject,
                        text: message
                    });
    
                    console.log("Message sent: %s", info.messageId);
                    res.redirect('/');
                } catch (error) {
                    console.error(error);
                    res.redirect('/');
                }
            }
        });
    },
    addUser: (req,res)=>{
        const {username, email} = req.body
    
        connection.query("INSERT INTO users(name, email) VALUES (?, ?)",[username, email], (error, result) => {
            if (error) {
              console.log(error);
            } else {
                console.log(result);
            }
        })
        
        res.redirect('/#users-list');
    
    },
    deleteUser: (req,res)=>{
        const{id} = req.body;
    
        connection.query("DELETE FROM users WHERE id= ?", [id], (error, result)=>{
            if(error){
                console.log(error);
            }else {
                console.log(result);
            }
        })
        res.redirect('/#users-list');
    },
    updateUser: (req,res)=>{
        const {id, username, email} = req.body;
    
        connection.query("UPDATE users SET name=? ,email= ? WHERE id = ?", [username, email, id], (error, result)=>{
            if(error){
                console.log(error);
            }else {
                console.log(result);
            }
        })
        res.redirect('/#users-list');
    }

}