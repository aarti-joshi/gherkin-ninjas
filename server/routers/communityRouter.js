const { Router } = require('express');

const communityController = require('../controllers/communityController');

const communityRouter = Router();

communityRouter.get('/', communityController.index);
communityRouter.get('/:event_id', communityController.show);
// communityRouter.post('/', communityController.create);

module.exports = communityRouter
