import React, { Component } from 'react';
import { getUsers } from '../../api';
import Spinner from '../Spinner';

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      currentPage: 1,
    };
    this.isRendered = false;
  }

  componentDidMount() {
    if (this.isRendered) return;

    this.isRendered = true;
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;
    getUsers({ page: currentPage, test: '12345' }).then((data) => {
      this.setState({
        users: data.results,
        isLoading: false,
      });
    });
  };

  changePage = (direction) => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: direction === 'next' ? currentPage + 1 : currentPage - 1,
    });
  };

  render() {
    const { users, isLoading } = this.state;

    return (
      <>
        {isLoading && <Spinner />}
        {users.length && (
          <>
            <button onClick={() => this.changePage('prev')}>Prev page</button>
            <button onClick={() => this.changePage('next')}>Next page</button>
            <ul>
              {users.map((user) => (
                <li key={user.login.uuid}>
                  <pre>{JSON.stringify(user, null, 4)}</pre>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}

export default UserLoader;
