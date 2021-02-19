import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { routes } from './shared/routes/routes'
import Navbar from './shared/theme/Navbar/Navbar'

import './App.css';
import './shared/styles/main.css'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <Navbar />
        <Switch>
          {routes.map((route, i) => (
            <Route exact key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
