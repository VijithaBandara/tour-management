import express from "express";
import { getAllUser, getSingleUser, deleteUser, updateUser } from "../controllers/userController";

const router = express.Router();

import { verifyAdmin, verifyUser } from "../Utils/verifyToken";

//update user
router.post( "/:id" , verifyUser, updateUser );

// delete user
router.post( "/:id" , verifyUser, deleteUser );

// getSingle user
router.post( "/:id" , verifyUser, getSingleUser );

// getAll user  
router.post( "/" , verifyAdmin, getAllUser );

export default router;