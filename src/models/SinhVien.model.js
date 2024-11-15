const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var SinhVienSchema = new mongoose.Schema({
    maLop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lop'
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
    username: {
        type: String,
    },
    password: {
        type: String,
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
    },
    avatar: {
        type: String,
        default: 'https://th.bing.com/th/id/R.be953f29410b3d18ef0e5e0fbd8d3120?rik=Dm2iDRVLgVcpdA&pid=ImgRaw&r=0'
    },
    mssv: {
        type: String,
    },
});

//Export the model
module.exports = mongoose.model('SinhVien', SinhVienSchema);