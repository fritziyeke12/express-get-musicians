const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO

app.use(express.json());

app.get("/musicians", async (req, res) => {
    const all = await Musician.findAll();
    res.json(all);
})

app.get('/musicians/:id', async (req, res) => {
    const mem = await Musician.findByPk(req.params.id);
    res.json(mem);
})

app.post('/musicians', async (req, res) => {
    await Musician.create(req.body);
    const all = await Musician.findAll();
    res.send(all);
})

app.put('/musicians/:id', async (req, res) => {
    const mem = await Musician.findByPk(req.params.id);
    await mem.update(req.body);
    res.send(mem);
})

app.delete('/musicians/:id', async (req, res) => {
    await Musician.destroy({
        where: {
            id: req.params.id
        }
    });
    const all = await Musician.findAll();
    res.send(all);
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on http://localhost:${port}`)
})