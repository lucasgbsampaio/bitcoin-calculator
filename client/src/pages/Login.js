import React from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_LOGIN } from '../services/api.js';

import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

import style from './Login.module.css';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError(null);
      setLoading(true);
      const { url, options } = USER_LOGIN({
        email,
        password,
      });

      const res = await fetch(url, options);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      window.localStorage.setItem('token', json.token);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    return () => {
      setError(null);
      setLoading(false);
    };
  }, []);

  return (
    <section className={style.wrapper}>
      <form className={style.container} onSubmit={handleSubmit}>
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

        {!loading ? <Button>Enviar</Button> : <Button disabled>Enviar</Button>}

        {error && <div>{error}</div>}
      </form>
    </section>
  );
}
