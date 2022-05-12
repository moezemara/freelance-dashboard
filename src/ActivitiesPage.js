import { useState } from "react";

const ActivitiesPage = () => {

    const [buttonsClasses,setButtonClasses] = useState({'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''}) 

    const [content, setContent] = useState('appliedproposals');

    const handleBtnClick = (btnState)=>{
        //setting button color to the appropriate theme
        var newState = {'appliedproposals':'','joboffers':'','activecontracts':'','finishedcontracts':''};
        newState[btnState] = 'activebutton';
        setButtonClasses(newState);
        setContent(btnState);
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
            pageContent=<h1>applied</h1>;
    }

    return (
        <div className="activitiespage">
            <div className="activitiesNavbar">
                <button id={buttonsClasses['appliedproposlas']} onClick={()=>{handleBtnClick('appliedproposlas');}}>Applied proposals</button>
                <button id={buttonsClasses['joboffers']} onClick={()=>{handleBtnClick('joboffers');}}>Job offers</button>
                <button id={buttonsClasses['activecontracts']} onClick={()=>{handleBtnClick('activecontracts');}}>Active Contracts</button>
                <button id={buttonsClasses['finishedcontracts']} onClick={()=>{handleBtnClick('finishedcontracts');}}>Finished Contracts</button>
            </div>
            {pageContent}
        </div>
    );
}
 
export default ActivitiesPage;