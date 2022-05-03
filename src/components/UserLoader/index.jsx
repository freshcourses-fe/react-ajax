import React, { Component } from 'react';
import { getUsers } from '../../api';
import Spinner from '../Spinner';
import UserCard from '../UserCard';
import styles from './UserLoader.module.scss';

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error: null,
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
    getUsers({ page: currentPage, results: 5000 })
      .then((data) => {
        this.setState({
          users: data.results,
        });
      })
      .catch((e) => {
        this.setState({ error: e });
      })
      .finally(() => {
        this.setState({
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
        {users.length && !isLoading && (
          <>
            <div className={styles.btnContainer}>
              <button onClick={() => this.changePage('prev')}>Prev page</button>
              <button onClick={() => this.changePage('next')}>Next page</button>
            </div>
            <ul>
              {users.map((user) => (
                <li key={user.login.uuid}>
                  <UserCard user={user} />
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}

/*
  приделать в копонент USerLoader обработку ошибок при загрузке
  пользоателей
  при ошибке отображать её текст
*/

export default UserLoader;
