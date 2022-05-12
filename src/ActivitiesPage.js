import { useEffect, useState } from "react";
import ContractCard from "./ContractCard";
import ProposalCard from "./ProposalCard";
import ProfileCard from "./ProfileCard";

const arr = [{'id':1,title:'Proposal 1',freelancerName:'someone',freelancerRate:'5',coverLetter:"freelancer cover letter",duedate:"5-13-2022", price:1000},];
const my_contracts = [{id:1,clientName:'someone',freelancerName:'someone else',description:'job description should be written here',price:'500'}]

const ActivitiesPage = () => {

    
    const [proposals,setProposals] = useState([]);
    const [contracts,setContractss] = useState([]);

    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''}) 

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
            <ProfileCard title="Job Card Example" price="1800" description="job description"/>
            </div>
            <div className="activitiesNavbar">
                <button id={buttonsClasses['appliedproposlas']} onClick={()=>{handleBtnClick('appliedproposlas');}}>Applied proposals</button>
                <button id={buttonsClasses['joboffers']} onClick={()=>{handleBtnClick('joboffers');}}>Job offers</button>
                <button id={buttonsClasses['activecontracts']} onClick={()=>{handleBtnClick('activecontracts');}}>Active Contracts</button>
                <button id={buttonsClasses['finishedcontracts']} onClick={()=>{handleBtnClick('finishedcontracts');}}>Finished Contracts</button>
            </div>
            <div>
                {pageContent}
            </div>
        </div>
    );
}
 
export default ActivitiesPage;