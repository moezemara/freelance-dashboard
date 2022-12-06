import { useEffect, useState } from "react";
import ContractCard from "../contracts/ContractCard";
import ProposalCard from "../proposals/ProposalCard";
import ProfileCard from "./ProfileCard";
import ClientNavbar from "../navbars/ClientNavbar";
import FreelancerNavbar from "../navbars/FreelancerNavbar";
import BriefProfileCard from "../profiles/BriefProfileCard";
import axios from "../shared/axios.js"
import Cookies from 'universal-cookie';
import ClientProfileCard from "./ClientProfileCard";
import accountCheck from "../shared/accountCheck";
const cookies = new Cookies();


const ProfileMainPage = () => {
    
    const [profileData,setProfileData] = useState({account:{},profile:{}});
    const [profiles,setProfiles] = useState('');
    const [activeProfileId, setActiveProfileId] = useState('');
    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'activebutton','joboffers':'','activecontracts':'','finishedcontracts':''}) 
    const [ButtonState,setButtonState] = useState('');
    const [content, setContent] = useState('');
    const accountType = cookies.getAll().type;
    
    
    

    useEffect(()=>{
        
        //accountCheck();
        
        if(accountType==='F'){
            axios.get('freelancer/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    setActiveProfileId(res.data.message.active_id);
                    document.cookie = 'active_id='+res.data.message.active_id;
                    setProfileData(res.data.message);
                    setProfiles(res.data.message.ids);
                    console.log(res);
                }
                else if(res.data.message==="you have not created a profile yet"){
                    window.location = "/createprofile/"
                }
                else{
                    //window.location = '/login';
                }
            });
        }
        else if(accountType==='C'){
            axios.get('client/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    setProfileData(res.data.message);
                    console.log(res);
                }
                else{
                    //window.location = '/login';
                }});
        }
    },[accountType]);

    async function handleBtnClick(btnState){
        //setting button color to the appropriate theme
        var newState = {'jobsposted':'','appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''};
        newState[btnState] = 'activebutton';
        setButtonClasses(newState);
        setButtonState(btnState);
        setContent();
        
    } 

    useEffect(()=>{
        if(!content){

        switch(ButtonState){
            case 'activecontracts':
                axios.get(`/contract/active`,{ withCredentials: true}).then((res)=>{
                    if(res.data.success===1){
                        setContent(res.data.message.map((contract)=>(
                            <ContractCard contract={contract}/>
                        )));
                        console.log(res);    
                    }
                    else{
                        setContent(<h3>{res.data.message}</h3>);
                    }
                });
                break;
            case 'finishedcontracts':
                axios.get(`/contract/archived`,{ withCredentials: true}).then((res)=>{
                    if(res.data.success===1){
                        setContent(res.data.message.map((contract)=>(
                            <ContractCard contract={contract}/>
                        )));
                        console.log(res);                 
                    }
                    else{
                        setContent(<h3>{res.data.message}</h3>);
                    }
                });
                break;
    }}},[ButtonState,content])



    return (
        
        <div>
            {(accountType==='C') && <ClientNavbar profile_id={activeProfileId}/>}
            {(accountType==='F') && <FreelancerNavbar profile_id={activeProfileId}/>}
            <div className="activitiespage">
                <div style={{alignItems:'center',"justifyContent":"center"}}>
                    <div style={{maxWidth:"800px","justifyContent":"center"}}>
                        {(accountType==='F') && profileData.profile.skills &&
                            <ProfileCard 
                            profileName={profileData.account.first_name + " " + profileData.account.last_name }
                            country={profileData.account.country} skills={profileData.profile.skills}
                            payRate={profileData.profile.pay_rate} rating ={profileData.profile.rating}
                            profilePictureLink={profileData.account.profile_picture}
                            description={profileData.profile.description}
                            />
                        }
                        {
                            (accountType==='C') &&
                            <ClientProfileCard
                            profileName={profileData.account.first_name + " " + profileData.account.last_name }       
                            country={profileData.account.country}
                            totalSpent = {profileData.profile.totalSpent}
                            rating ={profileData.profile.rating}
                            profilePictureLink={profileData.account.profile_picture}
                            />
                        }

                    </div>
                    {(profiles) &&
                        <div className="mainpagelistofprofiles" style={{"marginTop":"15px"}}>
                            <h2>Profiles:</h2>
                            { profiles.map((profile)=>(
                                <BriefProfileCard title={profile.title} id={profile.profile_id} key={profile.profile_id}/>
                            ))
                            }
                        </div>
                    }
                </div>
                
                <div className="activitiesNavbar">
                    <button id={buttonsClasses['activecontracts']} onClick={()=>{handleBtnClick('activecontracts');}}>Active Contracts</button>
                    <button id={buttonsClasses['finishedcontracts']} onClick={()=>{handleBtnClick('finishedcontracts');}}>Finished Contracts</button>
                </div>
                <div className='activities-page-content'>
                    {content}
                </div>
            </div>
        </div>
    
    );
}
 
export default ProfileMainPage;