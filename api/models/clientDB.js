const mongoose = require('mongoose');
const passportLocalmongoose = require('passport-local-mongoose');

const clientSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
})

clientSchema.plugin(passportLocalmongoose);

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;