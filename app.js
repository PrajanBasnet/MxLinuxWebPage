const express =  require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.get('/',(req,res) =>{
    res.render("index",{title:'MxLinux'});
})

app.listen((3000), () => {
    console.log("server is running on http://127.0.0.1:3000");
});