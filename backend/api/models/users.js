const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model

const UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required:true},
    password: {type: String, required: true, min:4, max:10},
},{
    timestamps:true,
});

// Exportar o modelo
module.exports = mongoose.model('User', UserSchema);