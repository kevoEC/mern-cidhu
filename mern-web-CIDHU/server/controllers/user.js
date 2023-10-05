const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

async function getMe(req, res){
    const {user_id} = req.user;
    const response = await User.findById(user_id);

    if(!response){
        res.status(404).send({message: "Usuario no encontrado"});
    } else {
        res.status(200).send({user: response});
    }
}

async function getUsers(req, res){
    const {active} = req.query;
    let response = null;

    if(active == undefined){
        response = await User.find();
    }else{
        response = await User.find({active});
    }
    res.status(200).send(response);
}

async function createUser(req, res){
    const {password} = req.body;
    const user = new User({...req.body, active: false});
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    user.password = hashPassword;
    if(req.files){
        //TO DO: Procesar avatar
        console.log("Procesar avatar");
    }

    user.save((error, userStored) => {
        if(error){
            res.status(500).send({message: `Error al crear el usuario: ${error}`});
        }else{
            res.status(201).send({userStored});
        }
    });
}

module.exports = {
    getMe,
    getUsers,
    createUser
}