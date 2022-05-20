import axios from "axios";

const FreelancerNavbar = () => {

    async function handleLogOut(){
        console.log(process.env.BASE_API_URL)
        const response = await axios.post('user/logout',).then((res)=>{window.location = '/';});
        console.log(response);
    }

    return (
        <nav className="navbar">
            <a href="/profile"><h2>Freelanco</h2></a>
            <a href="/browsejobs">Find work</a>
            <a href="/createprofile">Add Profile</a>
            <div className="links">
                <a href="/profilesettings">Settings</a>
                <a onClick={handleLogOut}>Log Out</a>
            </div>
        </nav>
    );
}
 
export default FreelancerNavbar;