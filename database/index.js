const mongoose = require('mongoose');
const env = require(`../environment/${ process.env.NODE_ENV }`);

mongoose.connect(env.dbUrl, {
    useNewUrlParser: true
}).then( () => console.log('connexion DB ok'))
    .catch( err => console.log(err));