import axios from "../axios.js"
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

const FreelancerNavbar = (props) => {

    const profile_id = props.profile_id;
    const [activeProfileId, setActiveProfileId] = useState('');

    const cookies = new Cookies();

    async function handleLogOut(){
        console.log(process.env.BASE_API_URL)
        axios.post('user/logout',{ withCredentials: true}).then((res)=>{
            if(res.data.success===1) window.location='/login';
        });
    }

    const [accountType,setAccountType] = useState('');


    
    async function getAccountType(){
        const type = await cookies.getAll().type;
        await setAccountType(type);
    }
    

    useEffect(()=>{
        if(accountType !== 'F' || accountType !== 'C'){
            getAccountType();
        }
        
        if(accountType==='F'){
            axios.get('freelancer/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    setActiveProfileId(res.data.message.active_id);
                    document.cookie = 'active_id='+res.data.message.active_id;
                }
                else{
                    window.location = '/login';
                }},[]);
        }
    },[accountType]);


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