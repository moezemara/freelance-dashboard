import ClientNavbar from "./ClientNavbar";
import FreelancerNavbar from "./FreelancerNavbar";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const JobPage = ()=>{
    const cookies = new Cookies();
    const accountType = cookies.getAll().type;
    const profile_id = cookies.getAll().active_id;
    const [jobData, setJobData] = useState();


    useEffect(()=>{

    },[])

    return(
        <div>
            {(accountType==='C') && <ClientNavbar profile_id={profile_id}/>}
            {(accountType==='F') && <FreelancerNavbar profile_id={profile_id}/>}
            <div className="jobpage">
                {jobData && <JobCard/>}
            </div>
        </div>
    );
}

export default JobPage;