import React from 'react';
import styles from './UserCard.module.scss';

const UserCard = (props) => {
  const {
    user: {
      name: { first, last },
      location: { city, state, country },
      login: { username },
      picture: { large },
    },
  } = props;
  return (
    <article className={styles.container}>
      <h2>{`${first} ${last}`}</h2>
      <h3>
        From {city}, {state}, {country}
      </h3>
      <div className={styles.imgWrapper}>
        <img src={large} alt={`${first} ${last}`} />
      </div>
      <p>Login is: {username}</p>
    </article>
  );
};

export default UserCard;
