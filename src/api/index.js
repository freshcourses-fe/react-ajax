import queryString from 'query-string';
import config from '../configs';
import axios from 'axios';

export async function getUsers(options) {
  const defaultOptions = {
    seed: config.DEFAULT_SEED,
    page: 1,
    results: config.RESULTS,
    inc: config.DEFAULT_USER_DATA,
  };

  const resultingOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(resultingOptions, {
    arrayFormat: 'comma',
  });

  return axios.get(`https://randomuser.me/api/?${query}`)

  // const response = await fetch(`https://randomuser.me/api/?${query}`);
  // console.log(response);
  // if (response.ok) {
  //   return response.json();
  // }
  // throw new Error(response.statusText);
}
