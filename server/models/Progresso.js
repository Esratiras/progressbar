const mongoose = require('mongoose')

const progresso = mongoose.Schema({
    value: {
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('Progresso', progresso)