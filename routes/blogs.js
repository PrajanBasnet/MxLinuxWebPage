const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
app.use(express.urlencoded({ extended: true }));

const routerDB = express.Router();

routerDB.post('/blog', (req, res) => {
    async function main() {
        const url = "mongodb+srv://HaterX:prajwal991@hater.oeu4l.mongodb.net/?retryWrites=true&w=majority&appName=Hater";

        const client = new MongoClient(url);
        try {
            await client.connect();
            const author = req.body.author;
            const myBody = req.body.body; // Assuming 'back' was a typo
            const title = req.body.title;

            const myDB = client.db("spider");
            const myColl = myDB.collection("hero");
            const doc = {
                title: title,
                body: myBody,
                author: author
            };
            const result = await myColl.insertOne(doc);
            res.render("news", { title: "news" });
        } catch (err) {
            console.error("There was an error:", err);
            res.status(500).send("Internal Server Error");
        } finally {
            await client.close();
        }
    }
    main().catch(console.error);
});

routerDB.get('/blog', (req, res) => {
    res.render("create", { title: 'blogs' });
});

module.exports = routerDB;
