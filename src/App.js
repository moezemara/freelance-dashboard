import Navbar  from './Navbar';
import Home from './Home';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import SignUp from './SignUp';
import Login from './Login';
import JobCard from './JobCard';
import PostJob from './PostJob';
import Page404 from './Page404';
import ProposalPage from './ProposalPage'
import ClientNavbar from './ClientNavbar';
import ClientMainPage from './ClientMainPage';
import ProfileSettings from './ProfileSettings';


function App() {
    return (
      <Router>
        <div className="App">
          <div className='content'>
            <Switch>
              <Route exact path="/" component={PostJob}>
                <Navbar/>
                <PostJob/>
              </Route>
              <Route exact path="/signup">
                <Navbar/>
                <SignUp/>
              </Route>
              <Route exact path="/login"> 
                <Navbar/>
                <Login/>
              </Route> 
              <Route exact path="/clientprofile">
                <ClientNavbar/>
                <ClientMainPage/>
              </Route>
              <Route exact path="/postjob">
                <ClientNavbar/>
                <PostJob/>
              </Route>
              <Route exact path="/profilesettings">
                <ClientNavbar/>
                <ProfileSettings/>
              </Route>
              <Route exact path="/proposalpage"> 
                <ProposalPage/>
              </Route> 
              <Route path="*">
                    <Page404/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;
