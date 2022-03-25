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
    const {name,age}=req.body
    console.log(name,age);

    users.push({
        name:name,
        age:age
    });
    res.json(users)

})

router.get('/users/:id', function(req,res){
    res.send('hi from hamzaaa')
})

export default router;