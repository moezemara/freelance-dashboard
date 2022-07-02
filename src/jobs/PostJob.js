import {getCategoriesList} from '../Options'
import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";
import accountCheck from '../accountCheck';

const PostJob = () => {

    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');
    const [experience_level,setExperienceLevel] = useState('');
    const [skills,setSkills] = useState('');
    const [description, setDescription] = useState('')
    const [expected_price,setExpectedPrice] = useState('');
    const [estimated_time, setEstimatedTime] = useState('');
    const [attachment, setAttachment] = useState('');
    const [JobMessage,setJobMessage] = useState('');
    
    async function handlepostJob(){
        console.log(process.env.BASE_API_URL)
        const data = {
            'title':title,
            'category':category,
            'experience':experience_level,
            'skills':skills.split(","),
            'description':description,
            'price':expected_price,
            'time':estimated_time,
        }

        const response = await axios.post('job/create', data, {withCredentials: true}) //for sending cookies
        
        setJobMessage(response.data.message);
        
        if(response.data.success){
            console.log(response)
            document.cookie = JSON.stringify({'type':response.data.message.type})
        }
        else{
            console.log("failed")
        }

    }

    useEffect(()=>{
        accountCheck();
      },[]);

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
                    <select value={category} onInput={e=>setCategory(e.target.value)}>
                        <option value=""  disabled selected hidden >Select Category</option>
                        {getCategoriesList()}
                    </select>
                    </td>
                    <td style={{width:'5%'}}></td>
<td>
                    <label><b>Needed Level</b></label>
                    <select value={experience_level} onInput={e=>setExperienceLevel(e.target.value)}>
                        <option value=""  disabled selected hidden >Select level</option>
                        <option value="Entry">Entry Level</option>
                        <option value="Intermediate">Intermediate Level</option>
                        <option value="Advanced">Advanced Level</option>
                    </select>
                    </td></tr></table>

                </div>
                <hr/>

                <div>
                <label><b> Description</b></label>
                    <textarea rows = "5" cols = "60" 
                    placeholder="Write the description of your job here..."
                    value={description} onInput={e=>setDescription(e.target.value)}></textarea>
                <hr/>
                </div>                
                <div>
                    <label><b>Skills</b></label>
                    <input type="text" placeholder="Skill, Skill, Skill, Skill"
                    value={skills} onInput={e=>setSkills(e.target.value)}/>
                </div>
                <hr/>
                <div>

<table style={{width:'100%'}}><tr><td>


                    <label><b>Expected price</b></label>
                    <input type="text"placeholder="Expected price $$" 
                    value={expected_price} onInput={e=>setExpectedPrice(e.target.value)}/>
                    </td>
                    <td style={{width:'5%'}}></td>
                    <td>
                    <label><b>Estimated total work time</b></label>
                    <input type="text" placeholder="Estimated work Time (hours)"
                    value={estimated_time} onInput={e=>setEstimatedTime(e.target.value)}/>
                    
                    </td></tr></table>
                </div>
                
                <hr/>
                <button type="button" onClick={handlepostJob}>Post Job</button>
            </form>
            <label>{JobMessage}</label>
        </div>
    );
}
 
export default PostJob;