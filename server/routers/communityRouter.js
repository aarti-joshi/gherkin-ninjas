const { Router } = require('express');

const communityController = require('../controllers/communityController');

const communityRouter = Router();

countryRouter.get('/', communityController.index);
countryRouter.get('/:name', communityController.show);
countryRouter.post('/', communityController.create);

module.exports = communityRouter
