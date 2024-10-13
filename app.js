const express = require("express");
const router = require("express/lib/router");
const app = express();
const { MongoClient } = require('mongodb');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.set('view engine', 'ejs');

const userRoute = require('./routes/blogs');;
app.use(userRoute);

app.get('/', (req, res) => {
    res.render("index", { title: 'MxLinux' });
})
app.get('/news', (req, res) => {
    res.render("news", { title: 'about' });
})


app.listen((3000), () => {
    console.log("server is running on http://127.0.0.1:3000");
});