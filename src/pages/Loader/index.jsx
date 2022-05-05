import React from 'react';
import DataProvider from '../../components/DataProvider';
import UserCard from '../../components/UserCard';

const LoaderPage = () => {
  const getLaptops = () =>
    fetch('/notebooks.json').then((response) => response.json());

  const getUsers = () =>
    fetch('https://randomuser.me/api/?results=10').then((response) =>
      response.json().then((data) => data.results)
    );
  return (
    <div>
      <DataProvider
        getData={getLaptops}
        render={(state) => (
          <ul>
            {state.data.map((item) => (
              <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        )}
      />
      <DataProvider
        getData={getUsers}
        render={({ data, error, isLoading }) => (
          <ul>
            {data.map((user) => (
              <UserCard key={user.login.uuid} user={user} />
            ))}
          </ul>
        )}
      />
    </div>
  );
};

export default LoaderPage;
