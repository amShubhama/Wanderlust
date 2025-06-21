const mongoose = require('mongoose');


const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        image_url: {
            type: String,
            default: "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            set: (v) => v === "" ? "https://unsplash.com/photos/a-lake-surrounded-by-mountains-under-a-blue-sky-Aln972onVgE"
                : v,
        },
        image_name: {
            type: String,
            default: "Property Picture",
        }
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;