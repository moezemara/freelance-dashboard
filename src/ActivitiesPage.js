import {useState, useEffect } from "react";
import Cookies from "universal-cookie";
import FreelancerNavbar from "./FreelancerNavbar";
import ClientNavbar from "./ClientNavbar";
import axios from "./axios.js"


const ActivitiesPage = ()=>{

    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'activebutton','joboffers':'','activecontracts':'','finishedcontracts':''}) 
    const [accountType, setAccountType] = useState();
    const cookies = new Cookies();
    const [active_id,setActiveId] = useState('');

    useEffect(()=>{
        if(accountType !== 'F' || accountType !=='C'){
            setAccountType(cookies.getAll().type);
            setActiveId(cookies.getAll().active_id);
            
        }
    },[accountType]);


    const handleBtnClick = (btnState)=>{
        //setting button color to the appropriate theme
        var newState = {'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''};
        newState[btnState] = 'activebutton';
        setButtonClasses(newState);
        switch(btnState){
            case 'activecontracts':
                axios.get(`contract/contract/${active_id}/active`,{ withCredentials: true}).then((res)=>{
                    console.log(res);
                });
                break;
            case 'finishedcontracts':
                axios.get(`contract/contract/${active_id}/archived`,{ withCredentials: true}).then((res)=>{
                    console.log(res);
                });
            break;
        }

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