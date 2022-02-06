/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/',
});

// const getUrl = async (
//   domain: string | null,
//   url: string | undefined
// ): Promise<typeof baseUrl> => {
//   const baseUrl =
//     url?.includes('login') || url?.includes('/obra')
//       ? `https://opus-qas.ngosolucoes.com/api/`
//       : `https://opus-qas.ngosolucoes.com/api/${domain}/`;

//   return baseUrl;
// };

// api.interceptors.request.use(async function ConfigRequest(configReq) {
//   const [sessionId, userId, domain, user] = await AsyncStorage.multiGet([
//     '@NGORDO:sessionId',
//     '@NGORDO:userId',
//     '@NGORDO:domain',
//     '@NGORDO:user',
//   ]);

//   if (user[1]) {
//     if (sessionId[1] && userId[1]) {
//       configReq.headers.cookie = `pjr=${userId[1]}; ngo=${sessionId[1]}`;
//     }
//   }
//   configReq.baseURL = await getUrl(domain[1], configReq.url);

//   return configReq;
// });

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
