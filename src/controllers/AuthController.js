import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import { validateEmail, validatePassword } from '../utils/validate.js';

dotenv.config();

function generateToken(params = {}) {
  return jwt.sign(params, process.env.APP_SECRET, {
    expiresIn: 86400,
  });
}

export default {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        throw new Error('Campos inválidos');
      }

      if (!validateEmail(email) || !validatePassword(password)) {
        throw new Error(
          'Email deve ser válido e a senha deve conter 6 números.'
        );
      }

      res.status(200).send({
        token: generateToken({ email }),
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};
