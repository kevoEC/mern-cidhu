async function getMe(req, res){
    res.status(200).send({message: "OK"});
}

module.exports = {
    getMe,
}