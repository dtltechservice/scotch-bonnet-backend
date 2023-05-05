const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true,"Please enter a product name"]
        },
        quantity : {
            type : Number,
            required : true
        },
        image : {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model('Product',productSchema)