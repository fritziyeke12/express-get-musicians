const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO
app.get("/musicians", async (req, res) => {
    const arr = await Musician.findAll();
    res.json(Array(arr[0]));
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on http://localhost:${port}`)
})