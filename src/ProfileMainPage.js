import { useEffect, useState } from "react";
import ContractCard from "./ContractCard";
import ProposalCard from "./ProposalCard";
import ProfileCard from "./ProfileCard";
import ClientNavbar from "./ClientNavbar";
import FreelancerNavbar from "./FreelancerNavbar";
import BriefProfileCard from "./BriefProfileCard";
import axios from "./axios.js"
import Cookies from 'universal-cookie';


const cookies = new Cookies();


const ProfileMainPage = () => {
    
    const [profileData,setProfileData] = useState({account:{},profile:{}});
    const [profiles,setProfiles] = useState([]);
    const [proposals,setProposals] = useState([]);
    const [contracts,setContractss] = useState([]);
    const [activeProfileId, setActiveProfileId] = useState('');
    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'activebutton','joboffers':'','activecontracts':'','finishedcontracts':''}) 

    const [content, setContent] = useState('appliedproposals');

    const [accountType,setAccountType] = useState('');

    async function getAccountType(){
        const type = await cookies.getAll().type;
        await setAccountType(type);
    }
    

    useEffect(()=>{
        if(accountType !== 'F' || accountType !== 'C'){
            getAccountType();
        }
        //let cookieObj = JSON.parse(document.cookie);
        //setAccountType(cookieObj.type);
        if(accountType==='F'){
            axios.get('freelancer/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    setActiveProfileId(res.data.message.active_id);
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
                    //setProfileData(res.data.message.profile);
                    console.log(res);
                    setActiveProfileId(res.data.message.profile_id);

                    setProfiles(res.data.message.ids);
                }
                else{
                    console.log(res);
                    //window.location = '/login';
                }},[]);
        }
    },[accountType]);

    const handleBtnClick = (btnState)=>{
        //setting button color to the appropriate theme
        var newState = {'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''};
        newState[btnState] = 'activebutton';
        setButtonClasses(newState);
        setContent(btnState);

        switch(btnState){
            case 'activecontracts':
                axios.get("freelancer/contract/active",{ withCredentials: true}).then((res)=>{
                    console.log(1);
                    console.log(res);
                });
                break;
            case 'finishedcontracts':
                axios.get("freelancer/contract/archived",{ withCredentials: true}).then((res)=>{
                    console.log(res);
                });
            break;
        }
        
    }

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

    

    let pageContent;

    switch(content){
        case 'joboffers':
            pageContent = getContractsList(contracts);
            break;
        case 'activecontracts':
            pageContent = getContractsList(contracts);
            break;
        case 'finishedcontracts':
            pageContent = getContractsList(contracts);
            break;
        default:
            pageContent=getProposalsList(proposals);
    }


    return (
        
        <div>
            {(accountType==='C') && <ClientNavbar profile_id={activeProfileId}/>}
            {(accountType==='F') && <FreelancerNavbar profile_id={activeProfileId}/>}
            <div className="activitiespage">
                <div style={{display:'flex'}}>
                    <div style={{marginRight:10,minWidth:600}}>
                        <ProfileCard 
                        profileName={profileData.account.first_name + " " + profileData.account.last_name }
                        country={profileData.account.country} skills={profileData.profile.skills}
                        payRate={profileData.profile.pay_rate} rating ={profileData.profile.rating}
                        profilePictureLink="https://carmensunion589.org/wp-content/uploads/2015/09/photo-300x300.png"
                        description={profileData.profile.description}
                        />
                    </div>
                    { (profiles) &&
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
                    {pageContent}
                </div>
            </div>
        </div>
    
    );
}
 
export default ProfileMainPage;