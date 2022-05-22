import { useEffect, useState } from "react";
import axios from "./axios.js"
import Cookies from 'universal-cookie';
import ProfileSidebar from "./ProfileSidebar";
import JobCard from "./JobCard";




// var jobs_list =
// [
//     {title:"Job Card Example", price:"1800", skills:['api','dashboard', 'web dev'],category:"web",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat molestias iste corrupti nemo modi consequatur consectetur accusantium praesentium laboriosam nostrum, assumenda quaerat quas at expedita, quos cumque repellendus pariatur deleniti. Incidunt similique consequatur, modi tempora numquam, dolorem soluta porro at magni illo dignissimos repellendus amet pariatur! Minus, quod quibusdam!",
//     attatchment:"https://www.zewailcity.edu.eg/media-library/PDFs/Academic_Calendar_2021-2022__2022-02-16052857.pdf"},
// ]

const BrowseJobs = () => {

    const [jobs,setJobs] = useState();

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
        <div className="browsejobs">
            <div className="jobslist">
                {jobs && jobs.map((job)=>(<JobCard job={job}/>))}
            </div>
            <ProfileSidebar/>
        </div>
    );
}
 
export default BrowseJobs;