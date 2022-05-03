import queryString from 'query-string';
import config from '../configs';

export function getUsers(options) {
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

  return fetch(`https://randomuser.me/api/?${query}`).then((response) =>
    response.json()
  );
}
