const express = require ('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/tacos', (req, res) => {
    res.send("Get /tacos response");
})

app.post('/tacos', (req, res) => {
    const {veggies, qty} = req.body;
    res.send(`OK, so you really want ${qty} ${veggies}`); // Giorigooo, Syntax Giorgoo!! 
    /* console.log(req.body);
    res.send("POST /tacos response");   <=== Not dynamic Giorgooo..*/
})

app.listen(1008, () => {
    console.log('listening on 1008');
})

console.log("Karem is a nice teacher.... I really wanna kiss her...")