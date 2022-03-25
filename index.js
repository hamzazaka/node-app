import express from "express";

import bodyParser from 'body-parser';
import userRouter from './routes/user.js'

const app= express()

app.use(bodyParser.json())

// api/users
app.use('/api', userRouter)


app.listen(3002,function(){
    console.log('hey server is running on port 3002');
})