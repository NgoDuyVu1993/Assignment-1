import express from 'express';
import Logger from '../utilities/logger';
import processImg from './api/processingImg';

const routes = express.Router();

routes.get('/', Logger, (request: express.Request, response: express.Response): void => {
    response.status(200).send('Send API Successfully!');
});

routes.use('/image', processImg);

export default routes;