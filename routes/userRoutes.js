const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
//const auth = require('../auth')

router.post('/register', (req, res) => {
	userController.registerUser(req.body)
	.then(resultFromController => res.send(resultFromController));
});

// router.post('/checkout', (req, res) => {
// 	userController.checkoutUser(req.body) // Name controller method the same as here!
// 	.then(resultFromController => res.send(resultFromController));
// });

// router.get('/:userId/userDetails', auth.verify, (req, res) =>{
// 	const userData = auth.decode(req.headers.authorization);
// 	userController.getProfile({userId: userData.id})
// 	.then(resultFromController => res.send(resultFromController))
// });

module.exports = router;
