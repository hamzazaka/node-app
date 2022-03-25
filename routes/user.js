import express from "express";  
import {v4 as uuidV4} from 'uuid';

const router= express.Router();

const users=[
    {
        name:'hamza',
        age:23,
        id:uuidV4()
    },
    {
        name:'elon',
        age:50,
        id:uuidV4()
        
    },
    {
        name:'john',
        age:24,
        id:uuidV4()
        
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
    const userId= req.params.id;

    const user=users.find(function(user){
        return user.id===userId
    })

    res.json(user)
})

router.delete('/users/:id',function(req,res){
    const userId=req.params.id

    users=users.filter(function(user){
        return true
    })

    res.json(users)
})

export default router;