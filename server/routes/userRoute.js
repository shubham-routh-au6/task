import express from "express";
import user from "../controller/userController.js";

const router = express.Router()

// Get all data
router.get("/users", user.GetUser);
router.get("/user", user.GetFirstUser);

export default router;