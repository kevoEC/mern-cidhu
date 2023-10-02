function register(req, res){
    console.log("Se ha ejecutado el controlador de registro de usuario")
    res.status(200).send({
        message: "TODO OK"
    });
}

module.exports = {  
    register,
};