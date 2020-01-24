const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//recebendo resposta do servidor
routes.get('/Devs', DevController.index);
routes.post('/Devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;