const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var HeDaoTaoSchema = new mongoose.Schema({
    giaTien: {
        type: Number,
    },
    tenHeDaoTao: {
        type: String,
    }
});

//Export the model
module.exports = mongoose.model('HeDaoTao', HeDaoTaoSchema);