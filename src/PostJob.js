import { useEffect } from "react";
import {getCategoriesList} from './Options'

const PostJob = () => {

    useEffect(()=>{});

    return (
        <div className="postjob">
            <h1>Post a Job</h1>
            <hr />
            <form>
                <div>
                    <label><b>Job Title</b></label>
                    <input type="text"/>
                </div>
                <hr/>
                <div>
                    <table style={{width:'100%'}}>
                    <tr ><td >
                    <label><b>Category</b></label>
                    <select >
                        <option value=""  disabled selected hidden >Select Category</option>
                        {getCategoriesList()}
                    </select>
                    </td>
                    <td style={{width:'5%'}}></td>
<td>
                    <label><b>Needed Level</b></label>
                    <select>
                        <option value=""  disabled selected hidden >Select level</option>
                        <option value="entery">Entry Level</option>
                        <option value="intermediate">Intermediate Level</option>
                        <option value="advanced">Advanced Level</option>
                    </select>
                    </td></tr></table>

                </div>
                <hr/>

                <div>
                <label><b> Description</b></label>
                    <textarea rows = "5" cols = "60" 
                    placeholder="Write the description of your job here..."></textarea>
                <hr/>
                </div>                
                <div>
                    <label><b>Skills</b></label>
                    <input type="text" placeholder="Skill, Skill, Skill, Skill"/>
                </div>
                <hr/>
                <div>

<table style={{width:'100%'}}><tr><td>


                    <label><b>Pay rate</b></label>
                    <input type="text"placeholder="pay rate ($$/hour)"/>
                    </td>
                    <td style={{width:'5%'}}></td>
                    <td>
                    <label><b>Estimated total work time</b></label>
                    <input type="text" placeholder="Estimated work Time (hours)"/>
                    
                    </td></tr></table>
                </div>
                
                
                <hr/>
                <button>Post Job</button>
            </form>
        </div>
    );
}
 
export default PostJob;