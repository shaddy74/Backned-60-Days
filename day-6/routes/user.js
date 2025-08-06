import express, { Router } from "express"
import { login, register } from "../controllers/user.js";

const router = express.Router();

router.route('/').post(register);
router.post("/login", login)

export default router;