import Navbar  from './Navbar';
import Home from './Home';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

function App() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Home/>
        </div>
      </Router>
    );
}

export default App;
