const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: String,
    active: Boolean,
    avatar: String,
    Denuncias: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Denuncias",
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);