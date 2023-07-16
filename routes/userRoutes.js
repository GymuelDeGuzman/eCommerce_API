/*
    Program:    eCommerce API
    Programmer: Gymuel De Guzman & Harold Anthony Maralit
    Section:    2n Year BSCS AN22
    Date:       July 16, 2023
*/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const auth = require('../auth')

//register user
router.post('/register', (req, res) => {
    userController.registerUser(req.body)
    .then(resultFromController => res.send(resultFromController));
});

//authenticate user
router.route('/login')
.post((req,res)=>{
    userController.loginUser(req.body).then(resultFromController => res.send(resultFromController))
});

//get user detail
router.get('/:id/details', auth.verify, (req, res) => {
    const userData = auth.decode(req.headers.authorization) //idk

    userController.getProfile({id: req.params.id}).then(resultFromController => res.send(resultFromController))
})


router.route('/:id/products')
.get((req,res)=>{
    userController.findAll({id: req.params.id})
    .then(resultFromController => res.send(resultFromController));
})

router.route('/:id/checkout')
.post((req,res)=>{
    //add items to order
    userController.checkOut({id: req.params.id}, req.body).then(resultFromController => res.send(resultFromController));
})

module.exports = router;
