import axios from "./axios.js"


import { useState } from "react";
const Milestone = (props)=>{
    
    const [milestoneId, setMilestoneId]  = useState(props.milestone.milestone_id);
    const [description, setDescription] = useState(props.milestone.description);
    const my_date = new Date(parseInt(props.milestone.date)).toLocaleDateString("en-US");
    const [dueDate, setDueDate] = useState(my_date);
    const [money, setMoney] = useState(props.milestone.amount);
    const status = props.status;
    const contract_id = props.milestone.proposal_id;
    const initial = (props.milestone.description==="");
    const contractStatus = props.contract_status;
    const [addedSuccess, setAddedSuccess] = useState(false);

    const handleAdd= ()=>{
        const data = {
            "description":description,
            "date":(new Date(dueDate)).getTime(),
            "amount":money
        };
        axios.post(`/contract/${contract_id}/milestone/add`,data,{withCreditionals:true}).then((res)=>{
            if(res.data.addedSuccess){
                window.location.reload(true);
            }
        });;
    }

    const handleEnd= ()=>{
        axios.post(`/contract/${contract_id}/milestone/${milestoneId}/end`,{withCreditionals:true}).then((res)=>{
            console.log(res);       
        });;
    }

    return(
        <div className="milestoneinput">
                        { (status==="NAN") && (!addedSuccess) &&
                            <input type="text" placeholder="Description" value={description} onInput={(e)=>setDescription(e.target.value)}/>
                        }
                        { (status==="NAN") && (!addedSuccess) &&
                            <input type="date" placeholder="Due Date" value={dueDate} onInput={(e)=>setDueDate(e.target.value)}/>
                        }
                        { (status==="NAN") && (!addedSuccess) &&
                            <input type="number" placeholder="Money $" value={money} onInput={(e)=>setMoney(e.target.value)}/>
                        }



                        { ((status!=="NAN")) &&
                            <label>{description}</label>
                        }
                        { (status!=="NAN") &&
                            <label>{dueDate}</label>
                        }
                        { (status!=="NAN") &&
                            <label>{money}</label>
                        }
                        { (status==="NAN") && (initial) && (!addedSuccess) &&
                            <button onClick={handleAdd}>Add</button>
                        }
                        {(status!=="NAN") && (contractStatus==="Active") &&
                            <button onClick={handleEnd}>Done</button>
                        }
        </div>
    );

}

export default Milestone;