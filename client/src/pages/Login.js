import React from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_LOGIN } from '../services/api.js';

import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_LOGIN({
      email,
      password,
    });

    const res = await fetch(url, options);
    if (res.ok) {
      const json = await res.json();
      window.localStorage.setItem('token', json.token);
      navigate('/');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />

        <Input
          label="Senha"
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />

        <Button>Enviar</Button>
      </form>
    </div>
  );
}
