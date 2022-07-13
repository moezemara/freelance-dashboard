import Navbar from "./navbars/Navbar";
import Home from "./Home";
import HomeWide from "./HomeWide";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./auth-forms/SignUp";
import Login from "./auth-forms/Login";
import PostJob from "./jobs/PostJob";
import Page404 from "./Page404";
import ProposalPage from "./proposals/ProposalPage";
import ClientNavbar from "./navbars/ClientNavbar";
import ProfileSettings from "./profiles/ProfileSettings";
import SiteStats from "./stats/SiteStats";
import Footer from "./footer/footer";
import FreelancerNavbar from "./navbars/FreelancerNavbar";
import BrowseJobs from "./jobs/BrowseJobs";
import ProfileMainPage from "./profiles/ProfileMainPage";
import MakeProfile from "./profiles/MakeProfile";
import ProfilePage from "./profiles/ProfilePage";
import ActivitiesPage from "./activities/ActivitiesPage";
import JobPage from "./jobs/JobPage";
import ContractPage from "./contracts/ContractPage";
import Chat from "./chat/Chat";
import PayementPage from "./payement/PayementPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>

           <Route exact path="/">
             <HomeWide/>
            </Route>

            <Route exact path="/test">
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

            <Route exct path="/createprofile">
              <MakeProfile/>
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
            <Route exact path="/payement">
              <PayementPage/>
            </Route>
            <Route exact path="/activitiespage/">
              <ActivitiesPage/>
            </Route>

            <Route exact path="/browsejobs">
              <FreelancerNavbar />
              <BrowseJobs />
            </Route>
            <Route exact path="/contract/:contract_id">
              <ContractPage/>
            </Route>

            <Route exact path="/chat/:contract_id">
                <Chat/>
            </Route>
            <Route exact path="/stats">
              <Navbar/>
              <SiteStats/>
            </Route>

            <Route path="*">
              <Page404 />
            </Route>
            
          </Switch>
        </div>
        <div><h1 style={{"color":"white"}}>Hide</h1></div>
        <div><h1 style={{"color":"white"}}>Hide</h1></div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
