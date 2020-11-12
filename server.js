const { db, syncAndSeed, models: { Person, Place, Thing }} = require('./db');
const { page, submitted } = require('./page');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/styles.css', (req, res) => res.sendFile(path.join(__dirname, 'styles.css')));

app.post('/', async(req, res, next) => {
    try {
        const values = req.body
        
        res.send(submitted())
    }
    catch(ex) {
        next(ex)
    }
})

app.get('/', async(req, res) => {
    try {
        const people = await Person.findAll();
        const places = await Place.findAll();
        const things = await Thing.findAll();

        res.send(page(people, places, things))
    }
    catch(ex) {
        console.log(ex)
    }
});

const init = async() => {
    await db.authenticate();
    await syncAndSeed();
    const port = (process.env.port || 3000)
    app.listen(port, () => console.log(`listening on port ${port}`));
}

init();