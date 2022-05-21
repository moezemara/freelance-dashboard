import { useEffect, useState } from "react";
import ContractCard from "./ContractCard";
import ProposalCard from "./ProposalCard";
import ProfileCard from "./ProfileCard";
import ClientNavbar from "./ClientNavbar";
import FreelancerNavbar from "./FreelancerNavbar";
import BriefProfileCard from "./BriefProfileCard";
import axios from "./axios.js"
import Cookies from 'universal-cookie';
import ClientProfileCard from "./ClientProfileCard";


const cookies = new Cookies();


const ProfileMainPage = () => {
    
    const [profileData,setProfileData] = useState({account:{},profile:{}});
    const [profiles,setProfiles] = useState('');
    const [proposals,setProposals] = useState([]);
    const [contracts,setContractss] = useState([]);
    const [activeProfileId, setActiveProfileId] = useState('');
    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'activebutton','joboffers':'','activecontracts':'','finishedcontracts':''}) 
    const [ButtonState,setButtonState] = useState('');
    const [prevContent, setPrevContent] = useState('');


    const [content, setContent] = useState('');

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
                    setProfileData(res.data.message);
                    setProfiles(res.data.message.ids);
                    console.log(res);
                }
                else{
                    window.location = '/login';
                }},[]);
        }
        else if(accountType==='C'){
            axios.get('client/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    setProfileData(res.data.message);
                    console.log(res);
                }
                else{
                    window.location = '/login';
                }},[]);
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
            setPrevContent(content);

        switch(ButtonState){
            case 'activecontracts':
                axios.get(`/contract/profile/${activeProfileId}/active`,{ withCredentials: true}).then((res)=>{
                    console.log(res);
                    if(res.data.success===1){
                        //todo:: mapping with proposals that will be sent
                    }
                    else{
                        setContent(<h3>{res.data.message}</h3>);
                    }
                });
                break;
            case 'finishedcontracts':
                axios.get(`/contract/profile/${activeProfileId}/archived`,{ withCredentials: true}).then((res)=>{
                    setContent(<h1>content</h1>)
                    if(res.data.success===1){
                        //todo:: mapping with proposals that will be sent
                    }
                    else{
                        setContent(<h3>{res.data.message}</h3>);
                    }
                });
                break;
    }}},[ButtonState,content])

    const getProposalsList = (myproposals)=>{
         return (  
             myproposals.map((proposal)=>(<ProposalCard proposal={proposal}/>))
      );
    }

    const getContractsList = (mycontracts)=>{
        return (  
            mycontracts.map((contract)=>(<ContractCard contract={contract}/>))
     );
   }



    return (
        
        <div>
            {(accountType==='C') && <ClientNavbar profile_id={activeProfileId}/>}
            {(accountType==='F') && <FreelancerNavbar profile_id={activeProfileId}/>}
            <div className="activitiespage">
                <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{marginRight:10,minWidth:600}}>
                        {(accountType==='F') && profileData.profile.skills &&
                            <ProfileCard 
                            profileName={profileData.account.first_name + " " + profileData.account.last_name }
                            country={profileData.account.country} skills={profileData.profile.skills}
                            payRate={profileData.profile.pay_rate} rating ={profileData.profile.rating}
                            profilePictureLink="https://carmensunion589.org/wp-content/uploads/2015/09/photo-300x300.png"
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
                        <div className="mainpagelistofprofiles">
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