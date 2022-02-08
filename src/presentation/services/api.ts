/* eslint-disable no-param-reassign */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/',
});

export const config = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  redirect: 'follow',
  referrer: 'no-referrer',
  headers: {
    cookie: '',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    withCredentials: true,
  },
  referrerPolicy: 'strict-origin-when-cross-origin',
};
