import {useState, useEffect } from "react";
import Cookies from "universal-cookie";
import FreelancerNavbar from "./navbars/FreelancerNavbar";
import ClientNavbar from "./navbars/ClientNavbar";
import axios from "./axios.js"
import JobCard from "./jobs/JobCard";
import FreelancerAppliedProposalCard from "./proposals/FreelancerAppliedProposalCard";
import ContractCard from "./contracts/ContractCard";



const ActivitiesPage = ()=>{

    const [prevContent, setPrevContent] = useState('');
    const [content, setContent] = useState();
    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':'','jobsposted':''}) 
    const [accountType, setAccountType] = useState();
    const cookies = new Cookies();
    const [active_id,setActiveId] = useState('');
    const [ButtonState,setButtonState] = useState('');

    useEffect(()=>{
        console.log(cookies.getAll().active_id)
        if(!cookies.getAll().active_id){
            window.location = '/login';
        }

        if(accountType !== 'F' || accountType !=='C'){
            setAccountType(cookies.getAll().type);
            setActiveId(cookies.getAll().active_id);
            
        }
    },[accountType]);

    

    async function setMyContent(mycontent){
        setContent(mycontent);
    }

     async function handleBtnClick(btnState){
        //setting button color to the appropriate theme
        var newState = {'jobsposted':'','appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''};
        newState[btnState] = 'activebutton';
        setButtonClasses(newState);
        setButtonState(btnState);
        setContent();
        
    } 

    useEffect(()=>{
        if((!content)){
            setPrevContent(content);

        switch(ButtonState){
            case 'appliedproposals':
                axios.get('/proposal/get/pending',{ withCredentials: true}).then((res)=>{
                    console.log(res);
                    if(res.data.success===1){
                        setContent(res.data.message.map((proposal)=>(
                            <FreelancerAppliedProposalCard job_id={proposal.job_id} client_profile={proposal.client_profile_id} 
                            price={proposal.price} cover_letter={proposal.cover_letter}
                            proposal_id={proposal.proposal_id} />
                         )));
                    }
                    else{
                        setContent(<h3>{res.data.message}</h3>);
                    }
                });
                break;
            case 'pendingcontracts':
                axios.get(`/contract/pending`,{ withCredentials: true}).then((res)=>{
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
            case 'activecontracts':
                axios.get(`/contract/active`,{ withCredentials: true}).then((res)=>{
                    console.log(res);
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
                    setContent(<h1>content</h1>)
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
            case 'jobsposted':
                axios.get(`job/get/active`,{ withCredentials: true}).then((res)=>{
                    if(res.data.success===1){
                        console.log(res.data.message)    
                        setMyContent(res.data.message.map((job)=>(<JobCard key={job.job_id} job={job}/>)));

                    }
                });
                break;
    }}},[ButtonState,content])
    

    return(
        <div>
            {(accountType==='F') && <FreelancerNavbar/>}
            {(accountType==='C') && <ClientNavbar/>}
            <div className="activitiespage">
                <div className="activitiesNavbar">
                    {(accountType==='F') && <button id={buttonsClasses['appliedproposals']} onClick={()=>{handleBtnClick('appliedproposals');}}>Applied proposals</button>}
                    {(accountType==='C') && <button id={buttonsClasses['jobsposted']} onClick={()=>{handleBtnClick('jobsposted');}}>Jobs Posted</button>}
                    <button id={buttonsClasses['pendingcontracts']} onClick={()=>{handleBtnClick('pendingcontracts');}}>Pending Contracts</button>
                    <button id={buttonsClasses['activecontracts']} onClick={()=>{handleBtnClick('activecontracts');}}>Active Contracts</button>
                    <button id={buttonsClasses['finishedcontracts']} onClick={()=>{handleBtnClick('finishedcontracts');}}>Finished Contracts</button>
                </div>
                <div className='activities-page-content'>
                    {(content) && content}
                </div>
            </div>
        </div>
    );
    


}
export default ActivitiesPage;