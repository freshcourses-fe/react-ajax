import './reset.css';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UserLoader from './components/UserLoader';

function App() {
  return (
    <BrowserRouter>
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

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about/test">
          <AboutTest />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const Home = () => <h1>HOME PAGE</h1>;
const AboutTest = () => <h1>ABOUT Test PAGE</h1>;
const About = () => <h1>ABOUT PAGE</h1>;
const Contacts = () => <h1>CONTACTS PAGE</h1>;

export default App;
