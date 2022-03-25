import express from "express";  

const router= express.Router();

const users=[
    {
        name:'hamza',
        age:23
    },
    {
        name:'elon',
        age:50
    },
    {
        name:'john',
        age:24
    },
]

router.get('/users', function(req,res){
    res.json(users)
});

router.post('/users',function(req,res){
    const body=req.body
    console.log(body);

})

export default router;