const express = require('express');
const connectDB = require('./utils/connectDB');
const Listing = require('./models/Listing')
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);


//index route
app.get('/listings', async (req, res) => {
    const data = await Listing.find({});
    res.render("./listings/index.ejs", { data });
})
//create listings
app.get('/listings/create', (req, res) => {
    res.render('./listings/create.ejs');
})
app.post('/listings/create', (req, res) => {
    res.send('mono');
})
//show route
app.get('/listings/:id', async (req, res) => {
    const { id } = req.params;
    const details = await Listing.findById(id);
    res.render('./listings/show.ejs', { details });
})
//edit route
app.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render('./listings/edit.ejs', { listing });
})
app.put('/listings/edit', (req, res) => {
    res.send("Edit");
})

app.get('/', (req, res) => {
    res.redirect('/listings')
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
    connectDB();
})