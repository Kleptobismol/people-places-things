const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/ppt');

const Person = db.define('person', {
    name: {
        type: STRING,
        unique: true
    }
});

const Place = db.define('place', {
    name: {
        type: STRING
    }
});

const Thing = db.define('thing', {
    name: {
        type: STRING
    }
});



const syncAndSeed = async() => {
    try {
        await db.sync({ force: true })
        Person.create({
            name: 'test'
        })
        Place.create({
            name: 'san francisco'
        })
        Thing.create({
            name:'foo'
        })
        Person.create({
            name: 'test2'
        })
        Place.create({
            name: 'los angeles'
        })
        Thing.create({
            name:'bar'
        })
    }
    catch(ex) {
        console.log(ex)
    }
}

module.exports = {
    db,
    syncAndSeed,
    models: {
        Person,
        Place,
        Thing
    }
};

