const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.set('view engine', 'ejs');

// Database code 

app.post('/blog',(req,res) =>{

    async function main() {
        const url = "mongodb+srv://HaterX:prajwal991@hater.oeu4l.mongodb.net/?retryWrites=true&w=majority&appName=Hater";
        const client = new MongoClient(url);
        try {

        const author = req.body.Author;
        const myBody = req.body.Body;
        const title = req.body.Title;
        await client.connect();
        const myDB = client.db("spider");
        const myColl = myDB.collection("hero");
        const doc = {title:`${title}`
        , body:myBody,
            author:author
        };
        const result = await myColl.insertOne(doc);
        // await listDatabases(client);
        res.render("news",{title:"news"});
    } catch (err) {
        console.log(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);




app.get('/', (req, res) => {
    res.render("index", { title: 'MxLinux' });
})
app.get('/news', (req, res) => {
    res.render("news", { title: 'about' });
})
app.get('/blog',(req,res) =>{
    res.render("create",{title:'blogs'});
})


app.listen((3000), () => {
    console.log("server is running on http://127.0.0.1:3000");
});