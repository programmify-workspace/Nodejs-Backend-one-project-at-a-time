import express from "express";

import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();


// all routes in here are starting with "/users"
router.get("/", getUsers);

// Create a user
router.post('/', createUser);

// Find user details
router.get("/:id", getUser);

// Delete a user
router.delete("/:id", deleteUser);

// Update a user

router.patch("/:id", updateUser);


export default router;