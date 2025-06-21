const sampleListings = [
    {
        title: "Sleek Modern House",
        description: "Ultra-modern home with clean lines and stylish facade.",
        image: {
            image_name: "Modern House"
        },
        price: 750,
        location: "Zurich, Switzerland",
        country: "Switzerland"
    },
    {
        title: "Cozy Suburban Home",
        description: "Welcoming suburban home with manicured lawn.",
        image: {

            image_name: "Suburban Home"
        },
        price: 300,
        location: "Toronto, Canada",
        country: "Canada"
    },
    {
        title: "Minimalist Pool Villa",
        description: "Elegant villa with private pool and large glass walls.",
        image: {

            image_name: "Pool Villa"
        },
        price: 1200,
        location: "Bali, Indonesia",
        country: "Indonesia"
    },
    {
        title: "Classic Brick Home",
        description: "Traditional brick home with timeless design.",
        image: {

            image_name: "Brick House"
        },
        price: 500,
        location: "Boston, MA",
        country: "USA"
    },
    {
        title: "Glass Lake House",
        description: "Modern glass house overlooking tranquil lake.",
        image: {

            image_name: "Lakefront Glass Home"
        },
        price: 950,
        location: "Zurich, Switzerland",
        country: "Switzerland"
    },
    {
        title: "Rustic Stone Cottage",
        description: "Cozy stone cottage in a peaceful countryside.",
        image: {

            image_name: "Stone Cottage"
        },
        price: 290,
        location: "Cotswolds",
        country: "UK"
    },
    {
        title: "Urban Loft Escape",
        description: "Contemporary loft in vibrant urban setting.",
        image: {

            image_name: "Urban Loft"
        },
        price: 560,
        location: "Berlin, Germany",
        country: "Germany"
    },
    {
        title: "Mid-Century Home",
        description: "Retro-inspired mid-century modern residence.",
        image: {

            image_name: "Mid-Century Home"
        },
        price: 670,
        location: "Los Angeles, CA",
        country: "USA"
    },
    {
        title: "Lakefront Luxury Villa",
        description: "Lavish villa right on the lake’s edge.",
        image: {

            image_name: "Lakefront Villa"
        },
        price: 1350,
        location: "Lake Como, Italy",
        country: "Italy"
    },
    {
        title: "Contemporary Townhouse",
        description: "Stylish urban townhouse with private balcony.",
        image: {

            image_name: "Townhouse"
        },
        price: 480,
        location: "Melbourne, Australia",
        country: "Australia"
    },
    {
        title: "Charming Beach Bungalow",
        description: "Relaxed bungalow steps from the beach.",
        image: {

            image_name: "Beach Bungalow"
        },
        price: 420,
        location: "Malibu, CA",
        country: "USA"
    },
    {
        title: "Modern Cube Home",
        description: "Geometric cube-style home with bold design.",
        image: {

            image_name: "Cube Home"
        },
        price: 450,
        location: "Stockholm, Sweden",
        country: "Sweden"
    },
    {
        title: "Luxury Ranch Home",
        description: "Single-level ranch with wide windows and porch.",
        image: {

            image_name: "Ranch Home"
        },
        price: 520,
        location: "Dallas, TX",
        country: "USA"
    },
    {
        title: "Dubai Cube Villa",
        description: "Ultra-modern cube villa with pool in the desert.",
        image: {

            image_name: "Cube Villa"
        },
        price: 860,
        location: "Dubai, UAE",
        country: "UAE"
    },
    {
        title: "Forest Tiny Cabin",
        description: "Compact cabin nestled among tall trees.",
        image: {

            image_name: "Tiny Cabin"
        },
        price: 180,
        location: "Vancouver Island",
        country: "Canada"
    },
    {
        title: "Stylish Family Craftsman",
        description: "Craftsman-style home with welcoming porch.",
        image: {

            image_name: "Craftsman Home"
        },
        price: 380,
        location: "Portland, OR",
        country: "USA"
    },
    {
        title: "Minimalist Glass Villa",
        description: "Light-filled villa with full glass facade.",
        image: {

            image_name: "Glass Villa"
        },
        price: 920,
        location: "Los Angeles, CA",
        country: "USA"
    },
    {
        title: "Mountain Cliff Cabin",
        description: "Secluded cabin perched above the valley.",
        image: {

            image_name: "Mountain Cabin"
        },
        price: 410,
        location: "Aspen, CO",
        country: "USA"
    },
    {
        title: "Urban Contemporary Flat",
        description: "Modern flat in a high-rise city building.",
        image: {

            image_name: "Urban Flat"
        },
        price: 300,
        location: "New York, NY",
        country: "USA"
    },
    {
        title: "Elegant Colonial Manor",
        description: "Historic colonial manor with stately facade.",
        image: {

            image_name: "Colonial Home"
        },
        price: 710,
        location: "Boston, MA",
        country: "USA"
    }
];

module.exports = { data: sampleListings };