const User = require('../models/user');

//Returns User profile
exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    return res.json(req.profile);
};

