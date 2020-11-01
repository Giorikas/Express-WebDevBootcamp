const { Console } = require("console");
const express = require("express");
const app = express();
// console.dir(app);

/* app.use((req, res) => {
    console.log("MEOOOOOOOOOOOOOOOOW!");
    console.dir(req);
    res.send("Yes Karem....")
    //res.send({color:"red"});
})
 */
//pattern
app.get('/r/:subreddit/:identiteit', (req, res)=>{
    const {subreddit, identiteit} = req.params;
    res.send(`<h2>Muhahaha</h2> ${identiteit}`);
})

//Querries:
app.get('/rest', (req, res)=>{

const { q } = req.query;
res.send(`<h1>Restaurants in Antwerp:${q} is onbekend</h1>`)
})

//katten
app.get('/cats', (req,res) =>{
    console.log("Katten verzoek!")
})

//honden
app.post('/dogs', (req, res) =>{
    console.log("PUSH DOG!")
})
app.get('/dogs', (req, res) =>{
    console.log("DOG!")
})
//home
app.get('/', (req,res) =>{
    console.log("Thuis!")
})

//Rest
app.get('*', (req,res) =>{
    console.log("No intièndo!")
})

app.listen(1008 , ()=> {
    console.log("listening on 1008");
})