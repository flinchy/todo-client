import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import NotFound from './components/pages/NotFound';

import AlertState from './context/alert/AlertState';

function App() {
  return (
    <AlertState>
      <Router>
        {/* Navbar goes here */}
        <div className="container">
        <Alert />
          <div className="card todo_area">
            <div className="todo_content">

              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </AlertState>
  );
}

export default App;
