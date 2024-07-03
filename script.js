// const figlet = require("figlet");
// figlet("hello world", function(err,data) {
//     if(err){
//         console.log("something went wrong");
//         console.dir(err);
//         return;
//     }
//         console.log(data);
// });
// app.use((req,res) => {
//     console.log("request recevied");
// });
const express = require("express");
const app = express();
let port = 8080;
app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname,"/views"));
app.listen(port, () => {
    console.log(`app is listening in port ${port}`);
});

app.get("/home", (req, res) =>{
    res.render("home.ejs");
});
app.get("/rolldice" , (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num: diceVal});
});
app.get("/ig/username", (req,res) => {
    let { username } = req.params('username');
    const instaData = require('./insta.json');
    res.render("instagram.ejs", {Userdata: JSON.stringify(instaData[username]) });
})
// app.route('/ig:/username').get((req,res) => {
//     let { username } = req.params;
//     const instaData = require("/data.json")
//     res.render("instagram.ejs", {data: instaData[username] });
// })
// app.get('/:id', function (req, res) {
//     console.log(req.params['id']);
//     res.send();
// });