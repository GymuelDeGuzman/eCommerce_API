/*
    Program:    eCommerce API
    Programmer: Gymuel De Guzman & Harold Anthony Maralit
    Section:    2n Year BSCS AN22
    Date:       July 16, 2023
*/

const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodControllers');

//register products
router.post('/', (req, res) => {
    prodController.registerProduct(req.body)
    .then(resultFromController => res.send(resultFromController));
});

// query all products
router.get('/', (req, res) => {
    prodController.findAll()
    .then(resultFromController => res.send(resultFromController));
});

// query all active products
router.get('/active', (req, res) => {
    prodController.findAllActive()
    .then(resultFromController => res.send(resultFromController));
});

// query one specific product
router.get('/:id', (req, res) => {
    prodController.findProduct({id: req.params.id})
    .then(resultFromController => res.send(resultFromController));
});

// activate product
router.put('/:id/activate', (req, res) => {
    prodController.activateProduct({id: req.params.id})
    .then(resultFromController => res.send(resultFromController));
});

// archive product
router.put('/:id/archive', (req, res) => {
    prodController.archiveProduct({id: req.params.id})
    .then(resultFromController => res.send(resultFromController));
});

// update product details
router.put('/:id', (req, res) => {
    prodController.updateProduct({id: req.params.id}, req.body)
    .then(resultFromController => res.send(resultFromController));
});

module.exports = router;