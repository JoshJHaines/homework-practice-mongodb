const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    origin: {
        type: String
    },
    rating: {
        type: String
    },
    servingSize: {
        type: String
    }
});

module.exports = mongoose.model('user', userSchema)