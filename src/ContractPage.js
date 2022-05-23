import Cookies from "universal-cookie";
import ClientNavbar from "./ClientNavbar";
import FreelancerNavbar from "./FreelancerNavbar";
import FreelancerContractPage from "./FreelancerContractPage";
import ClientContractPage from "./ClientContractPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./axios.js";


const ContractPage = ()=>{
    const contract_id = useParams().contract_id;
    const cookies = new Cookies();
    const accountType = cookies.getAll().type;
    const profile_id = cookies.getAll().active_id;
    const [contractData, setContractData] = useState();

    useEffect(()=>{
        axios.get(`contract/${contract_id}`,{withCredentials:true}).then((res)=>{
            setContractData(res.data.message);
            console.log(res);
    });
    });

    return(
        <div>
            {(accountType==='F') && <FreelancerNavbar profile_id={profile_id}/>}
            {(accountType==='F') && <FreelancerContractPage/>}
            {(accountType==='C') && <ClientNavbar profile_id={profile_id}/>}
            {(accountType==='C') && <ClientContractPage/>}

        </div>
    );
}


export default ContractPage;