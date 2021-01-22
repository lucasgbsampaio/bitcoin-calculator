import fetch from 'node-fetch';

import jsonReader from '../utils/fileSystem.js';

export default {
  async getConversion(req, res) {
    try {
      const response = await fetch(
        'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'
      );
      const json = await response.json();

      jsonReader('./currencies.json', (err, currency) => {
        if (err) {
          console.log(err);
          return;
        }

        const { bpi } = json;

        bpi.BRL = {
          code: 'BRL',
          rate: (currency.BRL * bpi.USD.rate_float).toLocaleString('pt-BR'),
          description: 'Brazilian Real',
          rate_float: currency.BRL * bpi.USD.rate_float,
        };
        bpi.EUR = {
          code: 'EUR',
          rate: (currency.EUR * bpi.USD.rate_float).toLocaleString('de-DE'),
          description: 'Euro',
          rate_float: currency.EUR * bpi.USD.rate_float,
        };
        bpi.CAD = {
          code: 'CAD',
          rate: (currency.CAD * bpi.USD.rate_float).toLocaleString('en-CA'),
          description: 'Canadian Dollar',
          rate_float: currency.CAD * bpi.USD.rate_float,
        };

        res.status(200).send(json);
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  async postConversion(req, res) {},
};
