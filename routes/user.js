import express from "express";  

const router= express.Router();

router.get('/users', function(req,res){
    res.json({
        "user":'hamza',
        "no":2
    })
})

export default router;