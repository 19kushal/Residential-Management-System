const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    wing: {
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    flat: {
        type: Number,
        required: true
    },
    resiType: {
        type: String,
        enum: ['Rent', 'Owned'],
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)