import axios from "./axios.js"

const FreelancerNavbar = (props) => {

    const profile_id = props.profile_id;


    async function handleLogOut(){
        console.log(process.env.BASE_API_URL)
        axios.post('user/logout',{ withCredentials: true}).then((res)=>{
            if(res.data.success===1) window.location='/login';
        });
    }

    return (
        <nav className="navbar">
            <a href="/profile"><h2>HomieLancer</h2></a>
            <a href="/browsejobs">Find work</a>
            <a href="/createprofile">Add Profile</a>
            <a href="/activitiespage">All Activities</a>
            <div className="links">
                <a href={`/profilesettings/${profile_id}`}>Settings</a>
                <a onClick={handleLogOut}>Log Out</a>
            </div>
        </nav>
    );
}
 
export default FreelancerNavbar;