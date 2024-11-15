const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ManagementSchema = new mongoose.Schema({
    hoTen:{
        type: String,
    },
    ngaySinh:{
        type: Date,
    },
    noiSinh:{
        type: String,
    },
    gioiTinh:{
        type: Boolean,
    },
    username:{
        type: String,
    },
    password:{
        type: String,
    },
    email:{
        type: String,
    },
    diaChi:{
        type: String,
    },
    danToc:{
        type: String,
    }
});

//Export the model
module.exports = mongoose.model('Management', ManagementSchema);