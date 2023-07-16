/*
    Program:    eCommerce API
    Programmer: Gymuel De Guzman & Harold Anthony Maralit
    Section:    2n Year BSCS AN22
    Date:       July 16, 2023
*/

const User = require('../models/user');
const Product = require('../models/product');
const bcrypt = require('bcrypt');
const auth = require('../auth');

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

module.exports.loginUser = (reqBody) => {
    return User.findOne ({email: reqBody.email}).then(result => {
        if (result == null) {return false}
        else {
            const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password)

            if (isPasswordCorrect){ return {access: auth.createAccessToken(result)}}
            else {return false}
        }
    })
}

module.exports.getProfile = (data) => {
    return User.findById(data.id).exec().then(result => {
        result.password = "";
        return result;
    });
}

module.exports.checkOut = (data, reqBody) => {
    let productList = {
            productName : reqBody.name,
            quantity : reqBody.quantity
        }
    

    return Product.findOne({name: reqBody.name})
    .then(queryRes => 
    {
        if (queryRes == null) return "Can't find product."
        else 
        {
            return User.findOneAndUpdate(
                {_id: data.id},
                {$push: {orderedProducts: [
                            {products: productList}
                ]}}
                )
            .then(result => {
                if(result == null || result == ""){
                    return "Cannot find user.";
                } else {
                    return "Order successful!";
                };
            })
        }
    })
}

module.exports.findAll = (data) => {
    return User.findById(data.id).exec().then(result => {
        return result.orderedProducts;
    });
}