import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      {/* Navbar goes here */}
      <div className="container">
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
  );
}

export default App;
