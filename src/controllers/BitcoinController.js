import fetch from 'node-fetch';
import fs from 'fs';

import jsonReader from '../utils/fileSystem.js';

function calculateRate(currencyRate, USRate) {
  return USRate * currencyRate;
}

export default {
  async getConversion(req, res) {
    try {
      const response = await fetch(
        'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'
      );
      const json = await response.json();

      jsonReader('./currencies.json', (err, currency) => {
        if (err) {
          res.status(400).send({
            message: 'Erro ao ler arquivo',
          });
          return;
        }

        const { bpi } = json;
        const { BRL, EUR, CAD } = currency;

        bpi.BRL = {
          code: 'BRL',
          rate: calculateRate(BRL, bpi.USD.rate_float).toLocaleString('en-US'),
          description: 'Brazilian Real',
          rate_float: calculateRate(BRL, bpi.USD.rate_float),
        };
        bpi.EUR = {
          code: 'EUR',
          rate: calculateRate(EUR, bpi.USD.rate_float).toLocaleString('en-US'),
          description: 'Euro',
          rate_float: calculateRate(EUR, bpi.USD.rate_float),
        };
        bpi.CAD = {
          code: 'CAD',
          rate: calculateRate(CAD, bpi.USD.rate_float).toLocaleString('en-US'),
          description: 'Canadian Dollar',
          rate_float: calculateRate(CAD, bpi.USD.rate_float),
        };

        res.status(200).send(json);
      });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  },

  async postConversion(req, res) {
    const { currency, value } = req.body;
    const codes = ['BRL', 'EUR', 'CAD'];

    try {
      if (!currency || !value) {
        throw new Error('Preencha os campos');
      }

      if (
        !codes.includes(currency) ||
        value < 0 ||
        !Number.isInteger(Number(value))
      ) {
        throw new Error('Moeda/Valor inválido');
      }

      jsonReader('./currencies.json', (err, currencies) => {
        if (err) {
          res.status(400).send({
            message: 'Erro ao ler arquivo',
          });
          return;
        }

        currencies[currency] = value;

        fs.writeFile('./currencies.json', JSON.stringify(currencies), (err) => {
          if (err) {
            res.status(400).send({
              message: 'Não foi possível alterar o valor',
            });
          }

          res.status(200).send({
            message: 'Valor alterado com sucesso!',
          });
        });
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  async getCurrentQuotation(req, res) {
    try {
      jsonReader('./currencies.json', (err, currency) => {
        if (err) {
          res.status(400).send({
            message: 'Erro ao ler arquivo',
          });
          return;
        }

        res.status(200).send(currency);
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};
