import express from "express";
import { getUsers, getOneUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getOneUser);

export default router;
