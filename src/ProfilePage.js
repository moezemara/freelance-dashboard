import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FreelancerNavbar from "./FreelancerNavbar";
import ProfileCard from "./ProfileCard";
import axios from "./axios.js"


const ProfilePage = ()=>{
    const {profile_id} = useParams();
    const [myData, setMyData] = useState({profile:{}});

    const handleEdit = ()=>{
        window.location = `/profilesettings/${profile_id}`;
    }

    useEffect(()=>{
        axios.get(`freelancer/profile/${profile_id}`,{ withCredentials: true}).then(res=>{
            if(res.data.success===1){
                setMyData(res.data.message);
                console.log(res);
            }
            else{
                window.location = '/*';
            }

        });
    },[]);

    return(
    <div style={{alignItems:'center',textAlign:'center',alignContent:'center'}}>
        <FreelancerNavbar/>
        <div className="profilepage">        
            {myData.profile.title && <ProfileCard profileTitle={myData.profile.title} profileName={myData.account.first_name+ " "+myData.account.last_name}
            country={myData.account.country} profileImageLink={myData.account.profile_picture} payRate={myData.profile.pay_rate}
            rating={myData.profile.rating} description={myData.profile.description} skills={JSON.parse(myData.profile.skills)}/> 
            }
            <div className="profilepageactivitiesNavbar">
                {myData.accessable &&
                    <button onClick={handleEdit}>Edit</button>
                }
            </div>
        </div>
    </div>
    );
}

export default ProfilePage;