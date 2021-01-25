import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { ALL_QUOTATIONS } from '../services/api.js';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

import style from './Home.module.css';

export default function Home() {
  const [btcValue, setBtcValue] = React.useState(1);
  const [quotations, setQuotations] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getQuotations() {
      try {
        setError(null);
        setLoading(true);
        const { url, options } = ALL_QUOTATIONS();
        const res = await fetch(url, options);
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json.message);
        }
        setQuotations(json.bpi);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }

    getQuotations();
  }, []);

  return (
    <section className={style.wrapper}>
      <div>
        <Link to="login">
          <Button>Entrar</Button>
        </Link>
        <Link to="update">
          <Button>Atualizar valor monetário</Button>
        </Link>
      </div>

      <div>
        <Input
          label="BTC"
          type="number"
          name="btc"
          value={btcValue}
          onChange={({ target }) => {
            setBtcValue(target.value);
          }}
        />
      </div>

      {loading && <Loader type="Oval" color="black" height={40} width={40} />}

      {quotations ? (
        <>
          <div>
            <Input
              label="USD"
              type="number"
              name="usd"
              value={quotations.USD.rate_float * btcValue}
              disabled
            />
          </div>
          <div>
            <Input
              label="BRL"
              type="number"
              name="brl"
              value={quotations.BRL.rate_float * btcValue}
              disabled
            />
          </div>
          <div>
            <Input
              label="EUR"
              type="number"
              name="eur"
              value={quotations.EUR.rate_float * btcValue}
              disabled
            />
          </div>
          <div>
            <Input
              label="CAD"
              type="number"
              name="cad"
              value={quotations.CAD.rate_float * btcValue}
              disabled
            />
          </div>
        </>
      ) : (
        <div>{error}</div>
      )}
    </section>
  );
}
