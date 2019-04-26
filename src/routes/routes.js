const express = require('express');

const routes = express.Router();

const AlertController = require('../controllers/AlertController');

routes.get('/alert', AlertController.read);
routes.post('/alert', AlertController.create);
routes.put('/alert/:_id', AlertController.update);
routes.delete('/alert/:_id', AlertController.delete);

routes.get('/alert/notify', AlertController.notify);

const EbayAPIController = require('../controllers/EbayAPIController');

routes.get('/search/:searchPhrase/:sort/:limit', EbayAPIController.get);


module.exports = routes;
