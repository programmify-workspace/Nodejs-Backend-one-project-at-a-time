const express = require('express')
const router = express.Router();
const emailController = require("../controllers/emailController")

router.get('/', emailController.getAllUsers);     

router.post('/send', emailController.sendEmail);

router.post("/add-user", emailController.addUser);

router.post('/delete-user', emailController.deleteUser);

router.post('/update-user', emailController.updateUser);

module.exports = router