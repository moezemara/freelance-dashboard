import { useEffect, useState } from "react";
import ContractCard from "./ContractCard";
import ProposalCard from "./ProposalCard";
import ProfileCard from "./ProfileCard";

const arr = [{'id':1,title:'Proposal 1',freelancerName:'someone',freelancerRate:'5',coverLetter:"freelancer cover letter",duedate:"5-13-2022", price:1000},];
const my_contracts = [{id:1,clientName:'someone',freelancerName:'someone else',status:'pending',description:'job description should be written here',price:'500'}]

const ActivitiesPage = () => {

    
    const [proposals,setProposals] = useState([]);
    const [contracts,setContractss] = useState([]);

    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'activebutton','joboffers':'','activecontracts':'','finishedcontracts':''}) 

    const [content, setContent] = useState('appliedproposals');

    useEffect(()=>{
        setProposals(arr);
        setContractss(my_contracts);
    });

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
        <div className="activitiespage">
            <div>
            <ProfileCard 
            profileName="M Ashmawy" country="Egypt" profilePictureLink="https://carmensunion589.org/wp-content/uploads/2015/09/photo-300x300.png"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus expedita voluptates eius ea esse ducimus sint adipisci vero provident laborum repellendus consequatur a odit excepturi repellat ipsum laudantium omnis amet, ad nisi aliquam iusto. Iste sit hic, aperiam, ratione quidem asperiores facere, necessitatibus odio enim cupiditate autem esse sequi nesciunt quasi illum assumenda natus. Culpa animi praesentium eaque itaque id iusto non! Corrupti, impedit maiores! Aliquid consectetur maiores nihil ipsum veniam, dignissimos architecto iure exercitationem animi et. Molestiae deleniti ex est accusantium aspernatur, illum nulla nemo, magni velit qui quas at iure asperiores temporibus assumenda dolorem odit! Iste, possimus."
            />

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
    );
}
 
export default ActivitiesPage;