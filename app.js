const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// Database code 

async function main() {
    const url = "mongodb+srv://haterh:prajwal991@cluster0.elv1j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    const client = new MongoClient(url);
    try {
        await client.connect();
        await listDatabases(client);
    } catch (err) {
        console.log(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();
    console.log("databaseList");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

//database ends here
//route code
app.get('/', (req, res) => {
    res.render("index", { title: 'MxLinux' });
})
app.get('/news', (req, res) => {
    res.render("news", { title: 'about' });
})
app.listen((3000), () => {
    console.log("server is running on http://127.0.0.1:3000");
});