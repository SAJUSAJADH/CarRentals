const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref: 'Client'},
    firstname: String,
    lastname:String,
    age:String,
    phone:String,
    email:String,
    address:String,
    city:String,
    zipcode:String,
    carType: String, 
    pickPlace: String, 
    dropPlace: String, 
    pickDate: String, 
    dropDate: String, 
    pickTime: String,
    dropTime : String
})



const Reservation = mongoose.model('Reservation',reservationSchema);

module.exports = Reservation;