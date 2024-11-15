const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var LopSchema = new mongoose.Schema({
    tenLop: {
        type: String,
    },
    maChuyenNganh: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChuyenNganh"
    },
    maHeDaoTao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HeDaoTao"
    }

});

//Export the model
module.exports = mongoose.model('Lop', LopSchema);