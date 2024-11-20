const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ChangeRequestSchema = new mongoose.Schema({
    type: String,
    request: {
        message: String,
        data: {
            tiet_id: mongoose.Types.ObjectId,
            tenLop: String,
            tenMon: String,
            dsSinhVien: [String],
            giaoVien: {
                maGiaoVien: mongoose.Types.ObjectId,
                tenGiaoVien: String
            },
            ngay: Number,
            phong: {
                maPhong: mongoose.Types.ObjectId,
                tenPhong: String,
                loaiPhong: String,
            },
            siSoToiDa: Number,
            tiet: String,
            date: {
                day: Number,
                month: Number,
                year: Number
            },
            hocKy: mongoose.Schema.Types.Mixed
        }
    },
    response: {
        message: String,
        data: mongoose.Schema.Types.Mixed
    },
    status: {
        type: String,
        default: 'QUEUE'
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('ChangeRequest', ChangeRequestSchema);