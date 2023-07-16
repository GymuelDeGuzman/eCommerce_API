const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	email : {
		type : String,
		required : [true, "Email is Required!"]
	},
	
	password : {
		type : String,
		required : [true, "Password is Required!"]
	},

	isAdmin : {
		type : Boolean,
		default : false,
	},

	orderedProducts : [{
		products : [{
			productId : {
				type : String,
			},

			productName : {
				type : String,
			},

			quantity : {
				type : Number,
			},
		}],

		totalAmount : {
			type : Number,
		},

		purchasedOn : {
			type : Date,
			default : Date(),
		}
		
	}],

});

module.exports = mongoose.model("User", userSchema);

