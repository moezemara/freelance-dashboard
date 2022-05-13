import ProfileSidebar from "./ProfileSidebar";
import JobCard from "./JobCard";

const BrowseJobs = () => {
    return (  
        <div className="browsejobs">
            <div className="jobslist">
                <JobCard title="Job Card Example" price="1800" description="job description"/>
            </div>
            <ProfileSidebar/>
        </div>
    );
}
 
export default BrowseJobs;