const pool = require('../database/index');

module.exports = {
    // Get all users
    getAll: async (req,res)=>{
        try{
            const [rows, fields] = await pool.query("SELECT * FROM users");
            // res.send("<h1 style='text-align:center;'>All users</h1>");
            res.json({
                data: rows
            });
        }catch(error){
            console.log(error);
            res.json({
                status: "error"
            });
        }
    },
    // Get user with an id
    getUser: async (req,res)=>{
        try{
            const {id} = req.params
            const [rows, fields] = await pool.query("SELECT * FROM users WHERE id = ?",[id]);
            res.json(rows[0]);
        }catch(error){
            console.log(error);
            res.json({
                status: "error"
            });
        }
    },
    // Create a new user
    createUser : async (req,res)=>{
        try{
            const {firstname, lastname, age} = req.body
            const sql= "INSERT INTO users( firstname, lastname, age) VALUES (?,?,?)"
            const [rows, field] = await pool.query(sql, [firstname, lastname, age])
            res.json({
                "data": rows
            });

        }catch(error){
            console.log(error);
            res.json({
                status: "error"
            });
        }
    },
    // Update user with an id
    updateUser : async (req,res)=>{
        try{
            const {id} = req.params
            const {firstname, lastname, age} = req.body
            const sql= "UPDATE users SET firstname = ?,lastname = ?,age = ? WHERE id = ?"
            const [rows, field] = await pool.query(sql, [firstname, lastname, age, id])
            res.json({
                "data": rows
            });

        }catch(error){
            console.log(error);
            res.json({
                status: "error"
            });
        }
    },

    //Delete user with specified id
    deleteUser : async (req,res)=>{
        try{
            const {id} = req.params
            const sql= "DELETE FROM users WHERE id = ?"
            const [rows, field] = await pool.query(sql, [id])
            res.json({
                "data": rows
            });

        }catch(error){
            console.log(error);
            res.json({
                status: "error"
            });
        }
    }
}