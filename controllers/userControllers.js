const User = require('../models/user');
const bcrypt = require('bcrypt');
//const auth = require('../auth')

module.exports.registerUser = (reqBody) => {
	let newUser = new User ({
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
		isAdmin: reqBody.isAdmin
	});

	return newUser.save().then((user,error) => {
		if(error){
			return false;
		} else {
			return true;
		};
	});
};
