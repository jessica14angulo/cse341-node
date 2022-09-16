const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Brenda Vasquez');
});

module.exports = routes;