/*
    Program:    eCommerce API
    Programmer: Gymuel De Guzman & Harold Anthony Maralit
    Section:    2n Year BSCS AN22
    Date:       July 16, 2023
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')
const prodRoutes = require('./routes/prodRoutes')

const app = express();

mongoose.connect('mongodb+srv://admin:Gdg49683534@sandbox.6yvvlof.mongodb.net/an22_deGuzman_Maralit_eCommerceAPI?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes)
app.use('/products', prodRoutes)

app.listen(process.env.PORT || 4000, () => {
	console.log(`Server is running on port ${process.env.PORT || 4000}`)
});


