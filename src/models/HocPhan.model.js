const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var HocPhanSchema = new mongoose.Schema({
    monHoc: {
        maMon: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MonHoc"
        }
    },
    lop: {
        maLop: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lop"
        }
    },
    hocKy: {
        maHocKy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "HocKy"
        }
    },
    tienQuyet: {
        type: Boolean
    },
    batBuoc: {
        type: Boolean
    },
    loaiDangKy: {
        type: String,
    },
    trangThai: {
        type: String,
        enum: ["Mở Lớp", "Đã Khóa", "Lên Kế Hoạch"],
        default: "Mở Lớp"
    },
    hocTruoc: {
        type: [{
            maMon: mongoose.Schema.Types.ObjectId,
            tenMon: String
        }]
    },
    songHanh: {
        type: [{
            maMon: mongoose.Schema.Types.ObjectId,
            tenMon: String
        }]
    },
    tietLyThuyet: {
        type: [{
            ngay: Number,
            tiet: String,
            phong: {
                maPhong: mongoose.Schema.Types.Mixed,
                tenPhong: String
            },
            giaoVien: {
                maGiaoVien: mongoose.Schema.Types.ObjectId,
                tenGiaoVien: String
            },
            siSoToiDa: Number,
            dsSinhVien: [mongoose.Schema.Types.ObjectId]
        }]
    },
    tietThucHanh: {
        type: [{
            ngay: Number,
            tiet: String,
            phong: {
                maPhong: mongoose.Schema.Types.Mixed,
                tenPhong: String
            },
            giaoVien: {
                maGiaoVien: mongoose.Schema.Types.ObjectId,
                tenGiaoVien: String
            },
            siSoToiDa: Number,
            dsSinhVien: [mongoose.Schema.Types.ObjectId]
        }]
    },

});

//Export the model
module.exports = mongoose.model('HocPhan', HocPhanSchema);