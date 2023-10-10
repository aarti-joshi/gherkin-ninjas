const { Router } = require('express');

const communityController = require('../controllers/communityController');

const communityRouter = Router();

communityRouter.get('/', communityController.index);
communityRouter.get('/:event_id', communityController.show);
communityRouter.post('/', communityController.create);
communityRouter.patch('/:event_id', communityController.update);
communityRouter.delete('/:event_id', communityController.destroy);

module.exports = communityRouter
