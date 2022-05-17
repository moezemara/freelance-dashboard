const FreelancerNavbar = () => {
    return (
        <nav className="navbar">
            <a href="/profile"><h2>Freelanco</h2></a>
            <a href="/browsejobs">Find work</a>
            <div className="links">
                <a href="/profilesettings">Settings</a>
                <a href="/logout">Log Out</a>
            </div>
        </nav>
    );
}
 
export default FreelancerNavbar;