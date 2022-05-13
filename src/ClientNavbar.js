const ClientNavbar = () => {
    return ( 
        <nav className="navbar">
        <a href="/"><h2>Freelanco</h2></a>
        <a href="/postjob">Post a Job</a>
        <a href="/clientprofile">Home</a>
        <div className="links">
            <a href="/profilesettings">Settings</a>
        </div>
    </nav>
     );
}
 
export default ClientNavbar;