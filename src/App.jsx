import './reset.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserLoader from './components/UserLoader';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

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
          render={(utilProps) => <Contacts {...utilProps} />}
        />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const Contacts = (props) => {
  return <h1>CONTACTS PAGE</h1>;
};

const NotFound = () => {
  return (
    <div>
      <h1>PAGE DOES NOT EXISTS</h1>
    </div>
  );
};
export default App;
