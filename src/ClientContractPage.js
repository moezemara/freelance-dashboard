import { useState } from "react";
import ContractCard from "./ContractCard";

const my_contract = {id:1,clientName:'someone',freelancerName:'someone else',status:'open',description:'job description should be written here',price:'500'};



const ClientContractPage = () => {

    const [milstoneNum, setMilestonesNum] = useState(3)
    const [milestonesInputs, setMilestonesInputs] = useState([1,2,3]);

    const updateMilestones = ()=>{
        setMilestonesNum(milstoneNum+1);
        let newArr = milestonesInputs;
        newArr.push(milestonesInputs[milestonesInputs.length-1]+1);
        console.log(newArr);
        setMilestonesInputs(newArr);
    }


    return (
        <div className="clientcontractpage">
            <ContractCard contract={my_contract}/>
            <div className="clientcontractmilestones">
                <p><b>Miltstones</b> ({milstoneNum})</p>
                { 
                (my_contract.status === "pending") &&
                milestonesInputs.map((i)=>(
                    <div className="milestoneinput" id={i} key={i}>
                        <label>{i}</label>
                        <input type="text" placeholder="Name"/>
                        <input type="date" placeholder="Due Date"/>
                        <input type="number" placeholder="Money $"/>

                    </div>
                ))}

                {
                    (my_contract.status !== "pending") &&
                    milestonesInputs.map((i)=>(
                        <div className="milestoneinput" id={i} key={i}>
                            <label>{i}</label>
                            <label>Name</label>
                            <label>Due Date</label>
                            <label>Money</label>
                        </div>
                    ))
                }

                {(my_contract.status === "pending") &&
                <button onClick={()=>{updateMilestones()}}><u><b>+Add Miltstones</b></u></button>}
            </div>
            {(my_contract.status==="pending") && <button>Agree On Contract</button>}
            {(my_contract.status==="open") && <button>Pay</button>}
        </div>
    );
}
 
export default ClientContractPage;