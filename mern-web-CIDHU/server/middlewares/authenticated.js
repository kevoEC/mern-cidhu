const jwt = require("../utils/jwt");

function asureAuth(req, res, next) {
    console.log("Me encuentro en ASURE AUTH");
    next();
}

module.exports = {
    asureAuth,
};
