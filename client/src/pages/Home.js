import React from 'react';
import { Link } from 'react-router-dom';

import { ALL_QUOTATIONS } from '../services/api.js';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

export default function Home() {
  const [btcValue, setBtcValue] = React.useState(1);
  const [quotations, setQuotations] = React.useState(null);

  React.useEffect(() => {
    async function getQuotations() {
      const { url, options } = ALL_QUOTATIONS();
      const res = await fetch(url, options);
      if (res.ok) {
        const json = await res.json();
        setQuotations(json.bpi);
      }
    }

    getQuotations();
  }, []);

  if (quotations)
    return (
      <div>
        <Link to="login">
          <Button>Entrar</Button>
        </Link>
        <Link to="update">
          <Button>Atualizar valor monetário</Button>
        </Link>

        <Input
          label="BTC"
          type="number"
          name="btc"
          value={btcValue}
          onChange={({ target }) => {
            setBtcValue(target.value);
          }}
        />
        <Input
          label="USD"
          type="number"
          name="usd"
          value={quotations.USD.rate_float * btcValue}
          disabled
        />
        <Input
          label="BRL"
          type="number"
          name="brl"
          value={quotations.BRL.rate_float * btcValue}
          disabled
        />
        <Input
          label="EUR"
          type="number"
          name="eur"
          value={quotations.EUR.rate_float * btcValue}
          disabled
        />
        <Input
          label="CAD"
          type="number"
          name="cad"
          value={quotations.CAD.rate_float * btcValue}
          disabled
        />
      </div>
    );

  return null;
}
