import { Router } from "express";

const router = Router();

// login and logout
router.post("/login", (req, res) => {
    res.send("login Router")
})

router.get("/logout", (req, res) => {
    res.send("logout Router")
})

export default router;