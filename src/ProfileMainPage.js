import { useEffect, useState } from "react";
import ContractCard from "./ContractCard";
import ProposalCard from "./ProposalCard";
import ProfileCard from "./ProfileCard";
import ClientNavbar from "./ClientNavbar";
import FreelancerNavbar from "./FreelancerNavbar";
import BriefProfileCard from "./BriefProfileCard";
import axios from "./axios.js"
import Cookies from 'universal-cookie';

const arr = [{'id':1,title:'Proposal 1',freelancerName:'someone',freelancerRate:'5',
coverLetter:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eum non autem porro aut consequatur corrupti possimus adipisci veritatis quisquam vero illum fugiat rerum itaque modi iste, accusantium distinctio dolores sint, ducimus officiis perspiciatis temporibus omnis. Non possimus a nisi aut optio soluta sint, recusandae similique quia reiciendis eos omnis error culpa in iure libero architecto nobis voluptates molestias porro repudiandae! Voluptates sunt aliquam debitis culpa reprehenderit. Nemo non natus voluptate praesentium! Maxime, unde quo beatae, fuga aut similique assumenda totam dignissimos et labore possimus id? Incidunt mollitia soluta nemo consequatur, autem assumenda reiciendis ratione illum amet quidem ut facilis.",
duedate:"5-13-2022", price:1000},];

const my_contracts = [{id:1,clientName:'someone',freelancerName:'someone else',status:'pending',description:'job description should be written here',price:'500'}]
const cookies = new Cookies();


const ProfileMainPage = () => {
    const [loaded,setLoaded] = useState(0);
    const [profileData,setProfileData] = useState({});
    const [profiles,setProfiles] = useState([]);
    const [proposals,setProposals] = useState([]);
    const [contracts,setContractss] = useState([]);

    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'activebutton','joboffers':'','activecontracts':'','finishedcontracts':''}) 

    const [content, setContent] = useState('appliedproposals');

    const [accountType,setAccountType] = useState('');


    

    useEffect(()=>{
        setAccountType(cookies.getAll().type);
        //let cookieObj = JSON.parse(document.cookie);
        //setAccountType(cookieObj.type);

        axios.get('freelancer/profile/',{ withCredentials: true}).then(res=>{
            if(res.data.success===1){
                setProfileData(res.data.message.profile);
                setProfiles(res.data.message.ids);
            }
            else{
                window.location = '/login';
            }});
    },[]);

    const handleBtnClick = (btnState)=>{
        //setting button color to the appropriate theme
        var newState = {'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''};
        newState[btnState] = 'activebutton';
        setButtonClasses(newState);
        setContent(btnState);
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
            {(accountType==='C') && <ClientNavbar/>}
            {(accountType==='F') && <FreelancerNavbar/>}
            <div className="activitiespage">
                <div style={{display:'flex'}}>
                    <div style={{marginRight:10,minWidth:600}}>
                        <ProfileCard 
                        profileName="M Ashmawy" country="Egypt" skills={profileData.skills} payRate={profileData.pay_rate} rating ={profileData.rating}
                        profilePictureLink="https://carmensunion589.org/wp-content/uploads/2015/09/photo-300x300.png"
                        description={profileData.description}
                        />
                    </div>
                    { (1==1) &&
                        <div className="mainpagelistofprofiles">
                            <h2>Profiles:</h2>
                            { profiles.map((profile)=>(
                                <BriefProfileCard title={profile.title} id={profile.profile_id} key={profile.profile_id}/>
                            ))
                            }
                            <BriefProfileCard title="another profile" key={1} id='1'/>
                        </div>
                    }
                </div>
                
                <div className="activitiesNavbar">
                    <button id={buttonsClasses['appliedproposals']} onClick={()=>{handleBtnClick('appliedproposals');}}>Applied proposals</button>
                    <button id={buttonsClasses['joboffers']} onClick={()=>{handleBtnClick('joboffers');}}>Job offers</button>
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