/*
    Program:    eCommerce API
    Programmer: Gymuel De Guzman & Harold Anthony Maralit
    Section:    2n Year BSCS AN22
    Date:       July 16, 2023
*/

const jwt = require('jsonwebtoken')
const secret = 'bcsAN22'

module.exports.createAccessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin
    }
    return jwt.sign(data, secret, {})
}

module.exports.verify = (req, res, next) => {
    module.exports.decode = (token) => 
    {

        if (typeof(token) !== 'undefined')
        {
            token = token.slice(7, token.length)

            return jwt.verify(token, secret, (err, data) => 
            {
                if(err) return null
                else 
                {
                    return jwt.decode(token, {complete: true}).payload;
                }
            })

        }
        else return null
    }
    next()
}