import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const isAltRenderMode = props.location.pathname === '/contacts';

  const componentsToRender = isAltRenderMode ? (
    <Link to='/'>На главную</Link>
  ) : (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  return componentsToRender;
};

export default Header;
