import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './feature/home/Home'
import Marathon from './feature/marathon/Marathon'
import Basic from './feature/basic/Basic'
import Joke from './feature/joke/Joke'

import Navbar from './shared/theme/Navbar/Navbar'

import './App.css';

function App() {
  return (
    <Router>
      <div>

        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/marathon">
            <Marathon />
          </Route>
          <Route path="/joke">
            <Joke />
          </Route>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
