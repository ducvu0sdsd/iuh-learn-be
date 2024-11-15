const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ChuyenNganhSchema = new mongoose.Schema({
    maKhoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Khoa'
    },
    tenChuyenNganh: {
        type: String,
    },
});

//Export the model
module.exports = mongoose.model('ChuyenNganh', ChuyenNganhSchema);