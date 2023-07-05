const express = require('express');
const router = express()

const usersController = require('../controller/usersController');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getUser);
router.post('/',usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;


