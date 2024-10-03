const express =  require("express");
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/',(req,res) =>{
    res.render("index",{title:'MxLinux'});
})

app.listen(3000);