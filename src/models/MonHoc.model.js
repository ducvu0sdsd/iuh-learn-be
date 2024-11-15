const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var MonHocSchema = new mongoose.Schema({
    maChuyenNganh: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChuyenNganh'
    },
    tenMon: {
        type: String,
    },
    soTinChi: {
        type: Number,
    },
    soTietLyThuyet: {
        type: Number,
    },
    soTietThucHanh: {
        type: Number,
    }
});

//Export the model
module.exports = mongoose.model('MonHoc', MonHocSchema);