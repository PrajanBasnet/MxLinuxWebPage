const express = require('express');
const app = express();

const PORT = 3000;

const router = express.Router();

router.get('/test',(req,res) =>{
    res.send("working wow great");
})

app.use(router);
module.exports = router;