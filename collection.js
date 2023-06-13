const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    name: String,
    password: String
})

module.exports = mongoose.model('logins', dataSchema)