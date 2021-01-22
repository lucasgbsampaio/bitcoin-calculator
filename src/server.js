import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import routes from './routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
/* app.use(express.static(path.join(__dirname, 'client', 'build')));
 */
app.use(bodyParser.json());
app.use('/api', routes);
/* app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
}); */
app.use((req, res, next) => {
  res.status(404).send({
    message: 'Endpoint não encontrado',
  });
});

app.listen(process.env.PORT || 8080, () => console.log('Server iniciado'));
