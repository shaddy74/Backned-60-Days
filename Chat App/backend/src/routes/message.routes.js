import express from "express"

import { protectRoute } from "../middleware/auth.middleware.js"
import { getMassage, getUsersForSidebar, sendMassage } from "../controllers/message.controller.js";


const router = express.Router()

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMassage);

router.post("/send/:id", protectRoute, sendMassage);


export default router;