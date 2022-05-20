import {useState, useEffect } from "react";
import Cookies from "universal-cookie";
import FreelancerNavbar from "./FreelancerNavbar";
import ClientNavbar from "./ClientNavbar";

const ActivitiesPage = ()=>{

    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'activebutton','joboffers':'','activecontracts':'','finishedcontracts':''}) 
    const [accountType, setAccountType] = useState();
    const cookies = new Cookies();

    useEffect(()=>{
        if(accountType !== 'F' || accountType !=='C'){
            setAccountType(cookies.getAll().type);
        }
    },[accountType]);


    const handleBtnClick = (btnState)=>{
        //setting button color to the appropriate theme
        var newState = {'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''};
        newState[btnState] = 'activebutton';
        setButtonClasses(newState);
        setContent(btnState);
    }

    return(
        <div>
            {(accountType==='F') && <FreelancerNavbar/>}
            {(accountType==='C') && <ClientNavbar/>}
            <div className="activitiespage">
                <div className="activitiesNavbar">
                    <button id={buttonsClasses['appliedproposals']} onClick={()=>{handleBtnClick('appliedproposals');}}>Applied proposals</button>
                    <button id={buttonsClasses['joboffers']} onClick={()=>{handleBtnClick('joboffers');}}>Job offers</button>
                    <button id={buttonsClasses['activecontracts']} onClick={()=>{handleBtnClick('activecontracts');}}>Active Contracts</button>
                    <button id={buttonsClasses['finishedcontracts']} onClick={()=>{handleBtnClick('finishedcontracts');}}>Finished Contracts</button>
                </div>
                <div className='activities-page-content'>
                </div>
            </div>
        </div>
    );
    


}
export default ActivitiesPage;