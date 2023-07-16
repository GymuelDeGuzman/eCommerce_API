/*
    Program:    eCommerce API
    Programmer: Gymuel De Guzman & Harold Anthony Maralit
    Section:    2n Year BSCS AN22
    Date:       July 16, 2023
*/

const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
	name : {
		type : String,
		required : [true, "Product Name is Required!"]
	},
	
	description : {
		type : String
	},

	price : {
		type : Number,
		required : [true, "Price is Required!"]
	},

	isActive : {
		type : Boolean,
		default : true,
	},

	createdOn : {
		type : Date,
		default : Date(),
	},

	userOrders : [{

		userId : {
			type : String,
		},

		orderId : {
			type : String,
		}

	}],

});

module.exports = mongoose.model("Product", productSchema);

