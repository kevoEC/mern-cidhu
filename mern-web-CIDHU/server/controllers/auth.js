const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

function register(req, res){
    const {firstname, lastname, email, password} = req.body;

    console.log(req.body);
    if(!email) res.status(400).send({message: "El email es obligatorio"});
    if(!password) res.status(400).send({message: "La contraseña es obligatoria"});

    const user = new User({
        firstname,
        lastname,
        email: email.toLowerCase(),
        password,
        role: "user",
        active: false
    });
    const salt = bcrypt.genSaltSync(10);
    
    res.status(200).send({
        message: "TODO OK"
    });
}

module.exports = {  
    register,
};