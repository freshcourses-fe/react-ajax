import './reset.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserLoader from './components/UserLoader';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Route exact component={Header} />

      <Switch>
        <Route path="/" exact>
          {(utilProps) => {
            return (
              <>
                <Home {...utilProps} />
                <p>test</p>
                <hr />
              </>
            );
          }}
        </Route>
        <Route path="/about" component={About} />

        <Route
          path="/contacts"
          render={(utilProps) => <Contacts {...utilProps} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

const Home = (props) => {
  return <h1>HOME PAGE</h1>;
};
const About = (props) => {
  return <h1>ABOUT PAGE</h1>;
};
const Contacts = (props) => {
  return <h1>CONTACTS PAGE</h1>;
};

export default App;
