const mongoose = require('mongoose')

const progress = mongoose.Schema({
    value: {
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('newProgresso', progress)