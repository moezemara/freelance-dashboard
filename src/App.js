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
import Footer from './footer';
import FreelancerNavbar from './FreelancerNavbar';
import BrowseJobs from './BrowseJobs';

function App() {
    return (
      <Router>
        <div className="App">
          <div className='content'>
            <Switch>
            <Route exact path="/">
				        <Navbar/>
                <Home/>
             </Route>
              <Route exact path="/postjob" component={PostJob}>
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
              <FreelancerNavbar/>
                <ProposalPage/>
              </Route> 
              <Route exact path="/browsejobs">
                <FreelancerNavbar/>
                <BrowseJobs/>
              </Route>
              <Route path="*">
                    <Page404/>
              </Route>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
}

export default App;
