const Product = require('../models/product');

module.exports.registerProduct = (reqBody) => {
    let newProduct = new Product ({
        name: reqBody.name,
        description: reqBody.description,
        price: reqBody.price,
        isActive: reqBody.isActive,
        createdOn: reqBody.createdOn
    });

    return newProduct.save().then((product,error) => {
        if(error){
            return "Unable to register product. Please try again.";
        } else {
            return "Product has been registered Successfully!";
        };
    });
};


module.exports.findProduct = (data) => {
    return Product.findById(data.id).then(result => {
        if(result == null || result == ""){
            return "No Matching Product Found.";
        } else {
            return result;
        };

    });
};


module.exports.findAll = (data) => {
    return Product.find().then(result => {
        if(result == null || result == ""){
            return "No Products Found.";
        } else {
            return result;
        };

    });
};


module.exports.findAllActive = (data) => {
    return Product.find({isActive: true}).then(result => {
        if(result == null || result == ""){
            return "No Active Products Found.";
        } else {
            return result;
        };

    });
};


module.exports.activateProduct = (data) => {
    return Product.findByIdAndUpdate(data.id, {isActive: true}).then(result => {
        if(result == null || result == ""){
            return "Cannot activate product.";
        } else {
            return result.name + " has been activated!";
        };

    });
};


module.exports.archiveProduct = (data) => {
    return Product.findByIdAndUpdate(data.id, {isActive: false}).then(result => {
        if(result == null || result == ""){
            return "Cannot archive product.";
        } else {
            return result.name + " has been archived.";
        };

    });
};


module.exports.updateProduct = (data, reqBody) => {
    return Product.findByIdAndUpdate(data.id, reqBody).then(result => {
        if(result == null || result == ""){
            return "Cannot find product to update.";
        } else {
            return result.name + "'s details has been updated.";
        };

    });
};

