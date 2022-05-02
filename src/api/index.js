import queryString from 'query-string';

export function getUsers(options) {
  const defaultOptions = {
    seed: 'fe2021-2',
    page: 1,
    results: 20,
    inc: ['gender', 'name', 'login', 'picture'],
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
