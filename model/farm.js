const mongoose = require('mongoose');
let schema = mongoose.Schema

let validetion = new schema({
    productName: String,
    from: String,
    nutrients: String,
    price: String,
    description: String
})
 let DATABASE= mongoose.model('product',validetion)
 module.exports=DATABASE