const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var GiaoVienSchema = new mongoose.Schema({
    maKhoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Khoa'
    },
    hoTen: {
        type: String,
    },
    ngaySinh: {
        type: Date,
    },
    noiSinh: {
        type: String,
    },
    gioiTinh: {
        type: Boolean,
    },
    email: {
        type: String,
    },
    diaChi: {
        type: String,
    },
    danToc: {
        type: String,
    },
    soDienThoai: {
        type: String,
    }
});

//Export the model
module.exports = mongoose.model('GiaoVien', GiaoVienSchema);