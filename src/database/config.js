const mongoose = require('mongoose');

require('dotenv').config();
const URI = process.env.MONGO_URI;

const dbConnection = async (req, res) => {
    try{        
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB is connected');

    }catch (error) {
        console.log(error);
        throw new Error('Error al conectarnos a la BD');
    }

}

module.exports = {
    dbConnection
}