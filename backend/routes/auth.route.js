import express from 'express';

const router = express.Router();

router.get("/signup",(req,res)=>{
    res.send("Sign up Route called")
});

router.get("/login",(req,res)=>{
    res.send("Login Route called")
});

router.get("/logout",(req,res)=>{
    res.send("Logout Route called")
});

export default router;