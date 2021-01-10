const mongoose = require('mongoose');
const {Schema} = mongoose; //Crear modelos de forma desacoplada

const BreakingNewSchema = new Schema({
    title:{type:String},
    link:{type:String}
}, {timestamp: {createdAt:true, updatedAt:true}});

module.exports = mongoose.model("BreakingNew", BreakingNewSchema);