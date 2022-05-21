import Navbar from "./Navbar";
import Home from "./Home";
import HomeWide from "./HomeWide";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import PostJob from "./PostJob";
import Page404 from "./Page404";
import ProposalPage from "./ProposalPage";
import ClientNavbar from "./ClientNavbar";
import ProfileSettings from "./ProfileSettings";
import Footer from "./footer";
import FreelancerNavbar from "./FreelancerNavbar";
import BrowseJobs from "./BrowseJobs";
import ProfileMainPage from "./ProfileMainPage";
import ClientContractPage from "./ClientContractPage";
import AppliedProposals from "./AppliedProposals";
import FreelancerContractPage from "./FreelancerContractPage";
import MakeProfile from "./MakeProfile";
import ProfilePage from "./ProfilePage";
import ActivitiesPage from "./ActivitiesPage";
import JobPage from "./JobPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>

           <Route exact path="/">
             <HomeWide/>
            </Route>

            <Route exact path="/oldhome">
              <Navbar/>
              <Home />
            </Route>
            <Route exact path="/signup">
              <Navbar />
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Navbar />
              <Login />
            </Route>
            <Route exact path="/profile">
              <ProfileMainPage/>
            </Route>
            <Route exact path="/profile/:profile_id">
                <ProfilePage/>
            </Route>
            <Route exact path="/postjob">
              <ClientNavbar />
              <PostJob />
            </Route>
            <Route exact path="/job/:job_id">
                <JobPage/>
            </Route>
            <Route exact path="/profilesettings/:profile_id">
              <ProfileSettings />
            </Route>
            <Route exact path="/activitiespage/">
              <ActivitiesPage/>
            </Route>

            <Route exact path="/browsejobs">
              <FreelancerNavbar />
              <BrowseJobs />
            </Route>
            
            <Route exct path="/testclientcontract">
              <ClientNavbar />
              <ClientContractPage />
            </Route>
            <Route exact path="/applied-proposals">
              <ClientNavbar />
              <AppliedProposals />
            </Route>

            <Route exct path="/testfreelancercontract">
              <FreelancerNavbar />
              <FreelancerContractPage />
            </Route>

            <Route exct path="/createprofile">
              <MakeProfile/>
            </Route>

            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
