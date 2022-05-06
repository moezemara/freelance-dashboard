import Navbar  from './Navbar';
import Home from './Home';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import SignUp from './SignUp';
import Login from './Login';

function App() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/signup">
                <SignUp/>
              </Route>
              <Route exact path="/login"> 
                <Login/>
              </Route> 
            
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;
