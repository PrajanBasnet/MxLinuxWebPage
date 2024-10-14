const express = require("express");
const { route } = require("./test");

const app =express();
app.use(express.urlencoded());

const routerDB = express.Router();

routerDB.post('/blog',(req,res) =>{
    async function main() {
    // const url = "mongodb+srv://haterh:prajwal991@cluster0.elv1j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    try {
            const url = "mongodb+srv://HaterX:prajwal991@hater.oeu4l.mongodb.net/?retryWrites=true&w=majority&appName=Hater";
            
            const client = new MongoClient(url);
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
    
});

routerDB.get('/blog',(req,res) =>{
    res.render("create",{title:'blogs'});
})

routerDB.get('/read',(req,res) =>{
    const options = {
        projection: {_id:0 , field1:1},
    };
})

module.exports = routerDB