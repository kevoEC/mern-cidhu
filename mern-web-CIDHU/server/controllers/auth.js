const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');


function register(req, res){
    const {firstname, lastname, email, password} = req.body;

    console.log(req.body);
    if(!email) res.status(400).send({message: "El email es obligatorio"});
    if(!password) res.status(400).send({message: "La contraseña es obligatoria"});

    const user = new User({
        firstname,
        lastname,
        email: email.toLowerCase(),
        role: "user",
        active: false
    });
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt); 
    user.password = hashPassword;
    console.log(user);

    user.save((error, userStored) => {

    if(error){
        res.status(500).send({message: `Error al crear el usuario: ${error}`});
    }else{
        res.status(200).send({userStored});
    }

    });
}
module.exports = {  
    register,
};