import axios from "../axios.js"
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const ClientNavbar = (props) => {

    const profile_id = props.profile_id;
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
        if(!type){window.location="/login";}
        await setAccountType(type);
    }
    

    useEffect(()=>{
        if(accountType !== 'F' || accountType !== 'C'){
            getAccountType();
        }
        if(accountType==='C'){
            axios.get('client/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    console.log(res);
                }
                else{
                    window.location = '/login';
                }},[]);
        }
    },[accountType]);

    return ( 
        <nav className="navbar">
        <a href="/profile"><h2>HomieLancer</h2></a>
        <a href="/postjob">Post a Job</a>
        <a href="/activitiespage">All Activities</a>

        <div className="links">
            <a onClick={handleLogOut}>Log Out</a>
        </div>
    </nav>
     );
}
 
export default ClientNavbar;