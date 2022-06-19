import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";
import AccountStats from "./AccountStats.js";
import ProposalStats from "./ProposalStats.js";
import ContractStats from "./ContractStats.js";
import JobStats from "./JobStats.js";

const SiteStats = () => {
    const [myData, setMyData] = useState({profile:{}});

    useEffect(()=>{
        axios.get(`stats`).then(res=>{
            if(res.data.success===1){
                setMyData(res.data.message);
                console.log(res);
            }
            else{
                axios.get(`stats`).then(res=>{
                    if(res.data.success){
                        setMyData(res.data.message);
                        console.log(res);
                    }
                    else{
                        console.log(res);
                    }
                });
            }

        });
    },[]);



return(

    <div className="sitestats">

<h1>Site Statistics</h1>


<AccountStats stats={myData.AccountStats} />
<JobStats stats={myData.JobStats} />
<ProposalStats stats={myData.ProposalStats} />
<ContractStats stats={myData.ContractStats} />


</div>
);

}

export default SiteStats