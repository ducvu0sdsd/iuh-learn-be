const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var KhoaSchema = new mongoose.Schema({
    tenKhoa: {
        type: String,
    },
});

//Export the model
module.exports = mongoose.model('Khoa', KhoaSchema);