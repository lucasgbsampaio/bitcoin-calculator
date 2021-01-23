export const API_URL = '/api';

export function USER_LOGIN(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function ALL_QUOTATIONS() {
  return {
    url: API_URL + '/crypto/btc',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      cache: 'no-store',
    },
  };
}

export function NEW_QUOTATION(body) {
  return {
    url: API_URL + '/crypto/btc',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
