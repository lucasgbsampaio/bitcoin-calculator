import express from 'express';

import AuthController from './controllers/AuthController.js';
import BitcoinController from './controllers/BitcoinController.js';
import authMiddleware from './middlewares/authMiddleware.js';

const routes = express.Router();

routes.post('/login', AuthController.login);

routes.use(authMiddleware);
routes.get('/crypto/btc', BitcoinController.getConversion);
routes.post('/crypto/btc', BitcoinController.postConversion);
routes.get('/quotation', BitcoinController.getCurrentQuotation);
routes.use((req, res) => {
  res.status(404).send({
    message: 'Endpoint não encontrado',
  });
});

export default routes;
