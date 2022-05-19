import {getCategoriesList} from './Options'
import { useState, useEffect, createRef } from "react";
import axios from "./axios.js";

const PostJob = () => {



    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');
    const [experience_level,setExperienceLevel] = useState('');
    const [skills,setSkills] = useState('');
    const [description, setDescription] = useState('')
    const [expected_price,setExpectedPrice] = useState('');
    const [estimated_time, setEstimatedTime] = useState('');
    const [attachment, setAttachment] = useState('');
    const [client_profile_id, setClientProfileId] = useState('');
    

    async function handleSignUp(){
        console.log(process.env.BASE_API_URL)
        const data = {
            'title':title,
            'category':category,
            'experience_level':experience_level,
            'skills':skills,
            'description':description,
            'expected_price':expected_price,
            'estimated_time':estimated_time,
            'attachment':attachment,
            'client_profile_id':client_profile_id,////////////////////will we use account id or profile id??
        }

        const response = await axios.post('user/postjob', data)
        console.log(response)
        if(response.data.success){
            document.cookie = JSON.stringify({'type':response.data.message.type})
            window.location = '/browsejobs';
        }
        else{
            console.log("failed")
        }

    }

    return (
        <div className="postjob">
            <h1>Post a Job</h1>
            <hr />
            <form>
                <div>
                    <label><b>Job Title</b></label>
                    <input type="text" value={title} onInput={e=>setTitle(e.target.value)}/>
                </div>
                <hr/>
                <div>
                    <table style={{width:'100%'}}>
                    <tr ><td >
                    <label><b>Category</b></label>
                    <select >value={category} onInput={e=>setCategory(e.target.value)}
                        <option value=""  disabled selected hidden >Select Category</option>
                        {getCategoriesList()}
                    </select>
                    </td>
                    <td style={{width:'5%'}}></td>
<td>
                    <label><b>Needed Level</b></label>
                    <select value={experience_level} onInput={e=>setExperienceLevel(e.target.value)}>
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