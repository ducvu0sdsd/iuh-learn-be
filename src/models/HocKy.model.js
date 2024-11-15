const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var HocKySchema = new mongoose.Schema({
    tenHocKy: {
        type: String,
    },
    choPhepDangKy: {
        type: Boolean,
    }
});

//Export the model
module.exports = mongoose.model('HocKy', HocKySchema);