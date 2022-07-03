import { useEffect, useState } from "react";
import axios from "../axios.js"
import Cookies from 'universal-cookie';
import JobCard from "./JobCard";
import accountCheck from "../accountCheck.js";



const BrowseJobs = () => {

    const [jobs,setJobs] = useState();
    //account check
    useEffect(()=>{
        accountCheck();
      },[]);

    //getting the jobs from the api
    useEffect(()=>{
        if(!jobs){
            axios.get('/job/browse',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    setJobs(res.data.message);
                    console.log(res);
                }
                else{
                    console.log(res);

            }},[]);
        }
    },[jobs]);



    return (  
        <div className="activitiespage">
            <div className="jobslist">
                {jobs && jobs.map((job)=>(<JobCard job={job}/>))}
            </div>
        </div>
    );
}
 
export default BrowseJobs;