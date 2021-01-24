import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { NEW_QUOTATION } from '../services/api.js';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

export default function UpdateQuotation() {
  const [quotation, setQuotation] = React.useState('BRL');
  const [valueCurrency, setValueCurrency] = React.useState(0);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = NEW_QUOTATION({
      currency: quotation,
      value: valueCurrency,
    });

    const res = await fetch(url, options);
    if (res.ok) {
      navigate('/');
    }
  }

  return (
    <div>
      <Link to="/">
        <Button>Voltar</Button>
      </Link>

      <label htmlFor="currencies">Moeda</label>
      <select
        name="currencies"
        id="currencies"
        value={quotation}
        onChange={({ target }) => setQuotation(target.value)}
      >
        <option value="BRL">BRL</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>

      {<div>Valor atual: </div>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Novo valor"
          type="number"
          name="currency"
          value={valueCurrency}
          onChange={({ target }) => {
            setValueCurrency(target.value);
          }}
          min="0"
        />

        <Button>Enviar</Button>
      </form>
    </div>
  );
}
