import './reset.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <BrowserRouter>
      {/* так обычно не делают (именно факт того что компонент а не страница) */}
      <Route exact component={Header} />

      <Switch>
        <Route path="/" exact>
          {(utilProps) => <HomePage {...utilProps} />}
        </Route>
        <Route path="/about" component={AboutPage} />

        <Route
          path="/contacts"
          render={(utilProps) => <ContactsPage {...utilProps} />}
        />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}



export default App;
