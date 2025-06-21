const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/AIRBNB'

async function connectDB() {
    await mongoose.connect(MONGO_URL).then(() => {
        console.log('DB is connected successfully');
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDB;