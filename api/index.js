require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Port = process.env.PORT;
const session = require('express-session');
const passport = require('passport');
const passportLocalmongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(5);
const authenticateJWT = require("./middleware/authenticateJWT");


app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

app.use(cookieParser());

require("./db/connect");

const Client = require('./models/clientDB');
const Reservation = require('./models/reservationDB');




app.post('/api/register',async (req,res)=>{
    const {username} = req.body;
    const {password} = req.body;
    try{
        const userExist = await Client.findOne({username:username}) ;
        if(userExist){
            return res.status(422).json({error:"email already exist"});
        }else{
            const client = new Client({
                username: username,
                password: bcrypt.hashSync(password,salt)
            })
            await client.save();
            res.json(client);
        }

    }catch(e){
        console.log(e)
    }
    
})

app.post('/api/login',async (req,res)=>{
    const {username,password} = req.body;
 

    try{
        const clientExist = await Client.findOne({username});
        if(clientExist){
           const passOk = bcrypt.compareSync(password, clientExist.password);
           if(passOk){
            jwt.sign({
                id: clientExist._id,
                username: clientExist.username,
                password: clientExist.password,
            },jwtSecret,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token', token).json(clientExist);
            })
           }else{
            res.json({message:"incorrect password"})
           }
        }else{
            res.json({message:"user not found"})
        }
    }catch(e){
        console.log(e)
    }
})


app.get('/api/verify',(req,res)=>{
    const {token} = req.cookies;

        if(token)
            {jwt.verify(token, jwtSecret, {}, async (err, clientData)=>{
            if(err) throw err;
            const client = await Client.findById(clientData.id);
            if(!client){
                res.json({message:"no user"})
            }else{
                const {username,_id,password} = client;
                res.json({username,_id,password})
            }
        })}else{
            res.json(null)
        }
})

app.post('/api/reservation', authenticateJWT, async(req,res)=>{
    const {carType, pickPlace, dropPlace, pickDate, dropDate, pickTime,dropTime ,firstname,lastname ,age ,phone,email,address,city,zipcode} = req.body;
    const clientId = req.user.id;
    try{
        const reservation = new Reservation({
            owner: clientId,
            firstname: firstname,
            lastname: lastname,
            age: age,
            phone: phone,
            email: email,
            address: address,
            city: city,
            zipcode: zipcode,
            carType: carType, 
            pickPlace: pickPlace, 
            dropPlace: dropPlace, 
            pickDate: pickDate, 
            dropDate: dropDate, 
            pickTime: pickTime,
            dropTime : dropTime
        })
        await reservation.save();
        res.json(reservation)
    }catch(error){
        console.log(error)
        res.json(error)
    }
})

app.get('/api/bookings',authenticateJWT, async (req,res)=>{
   const userId = req.user.id;
    try{
        const reservation = await Reservation.find({owner: userId});
        if(reservation){
            res.json(reservation)
        }else{
            res.json(null)
        }
    }catch(e){
        res.json(e)
    }
})

app.post('/api/cancel', async (req,res)=>{
    const {bookingId} = req.body;
    try{
        const reservation = await Reservation.findOneAndDelete({_id: bookingId})
        if(reservation){
            res.json('deleted')
        }
        else{
            res.json('couldnt delete at this stage')
        }
    }catch(e){
        res.json(e)
    }
})

app.post('/api/logout', (req,res)=>{
    res.cookie('token','').json(true);
})

app.listen(Port, ()=>{
    console.log("app started...")
})


