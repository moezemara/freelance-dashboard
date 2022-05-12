import { useEffect, useState } from "react";
import ProposalCard from "./ProposalCard";


const arr = [{'id':1,title:'Proposal 1',freelancerName:'mark',freelancerRate:'5',coverLetter:"freelancer cover letter",duedate:"5-13-2022", price:1000},];

const ActivitiesPage = () => {

    
    const [proposals,setProposals] = useState([]);

    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''}) 

    const [content, setContent] = useState('appliedproposals');

    useEffect(()=>{
        setProposals(arr);
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

    

    let pageContent;

    switch(content){
        case 'joboffers':
            pageContent = <h1>job offers</h1>;
            break;
        case 'activecontracts':
            pageContent = <h1>activecontracts</h1>;
            break;
        case 'finishedcontracts':
            pageContent = <h1>finished contracts</h1>;
            break;
        default:
            pageContent=getProposalsList(proposals);
    }

    return (
        <div className="activitiespage">
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