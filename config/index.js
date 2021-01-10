if(process.env.NODE_ENV !== 'production'){ //Estamos en desarrollo
    require('dotenv').config();
}

module.exports = {
    MONGO_URI: process.env.MONGO_URI
};