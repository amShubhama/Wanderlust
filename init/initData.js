const connectDB = require('../utils/connectDB');
const Listing = require('../models/Listing');
const sample = require('./data');

const initDB = async () => {
    connectDB();
    await Listing.deleteMany({});
    await Listing.insertMany(sample.data);
    console.log('data was initialized');
}

initDB();