import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './components/PrivateRoute';
import Spinner from './components/Spinner';
// import ProfilePage from './pages/Profile';
const ProfilePage = React.lazy(() => import('./pages/Profile'));

class App extends React.Component {
  state = {
    user: { role: 'admin' },
  };

  render() {
    return (
      <BrowserRouter>
        {/* так обычно не делают (именно факт того что компонент а не страница) */}
        <Route exact component={Header} />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact>
              {(utilProps) => <HomePage {...utilProps} />}
            </Route>
            <Route path="/about" component={AboutPage} />

            <Route
              path="/contacts"
              render={(utilProps) => <ContactsPage {...utilProps} />}
            />

            <PrivateRoute
              roles={['admin', 'moder']}
              user={this.state.user}
              route={{ path: '/profile' }}
            >
              <ProfilePage />
            </PrivateRoute>

            <Redirect to="/about" from="/info" />

            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
