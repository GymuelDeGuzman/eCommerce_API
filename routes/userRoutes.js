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

router.route('/checkout')
.post((req,res)=>{
    //create order or checkout
})

router.route('/orders')
.get((req,res)=>{
    //retrieve all orders (admin only)
})

module.exports = router;