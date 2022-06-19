import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";

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


<div className="accounts-stats">
<h2>Accounts stats</h2>
    <p>number of users: <b>xx</b></p>
    <p>percent of freelancers: <b>xx</b></p>
    <p>percent of clients: <b>xx</b></p>
    <p>Avg. clients rating: <b>xx</b></p>
    <p>Avg. freelancers rating: <b>xx</b></p>
    <p>Percent of Male users: <b>xx</b></p>
    <p>Percent of Female users: <b>xx</b></p>
    <p>Num of banned accounts: <b>xx</b></p>

</div>


<div className="jobs-stats">
<h2>Jobs stats</h2>

    <p>Num of all jobs: <b>xx</b></p>
    <p>Num of active jobs: <b>xx</b></p>
    <p>Beginner Level: <b>xx</b></p>
    <p>intermediate Level: <b>xx</b></p>
    <p>Advanced Level: <b>xx</b></p>
    <p>Avg expected price: <b>xx</b></p>
    <p>Avg working hours: <b>xx</b></p>
    
</div>




<div className="proposals-stats">

<h2>Proposals stats</h2>

    <p>number of proposals: <b>xx</b></p>
    <p>number of opened proposals: <b>xx</b></p>
    <p>Avg. price: <b>xx</b></p>
    <p>Avg. expected duration: <b>xx</b></p>
    
</div>



<div className="contracts-stats">

<h2>Contracts stats</h2>

    <p>In-intervieiw contracts: <b>xx</b></p>
    <p>Active contracts: <b>xx</b></p>
    <p>Archieved contracts: <b>xx</b></p>
    <p>Avg. Final price: <b>xx</b></p>

</div>


</div>
);

}

export default SiteStats