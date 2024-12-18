const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var PhongSchema = new mongoose.Schema({
    tenPhong: {
        type: String,
    },
    toa: {
        type: String
    },
    tang: {
        type: Number
    },
    loai: {
        type: String // lt hay th
    },
    siSo: {
        type: Number
    }
});

//Export the model
module.exports = mongoose.model('Phong', PhongSchema);