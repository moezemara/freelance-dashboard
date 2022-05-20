import { useEffect, useState } from 'react';
import {getCategoriesList, getGenderList} from './Options.js'
import Cookies from 'universal-cookie';
import FreelancerNavbar from './FreelancerNavbar.js';
import ClientNavbar from './ClientNavbar.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProfileSettings = () => {
    const [accountType, setAccountType] = useState();
    const {profile_id} = useParams();
    const cookies = new Cookies();


    const handleActivate = ()=>{
        var urlRoot = '';
        if(accountType==='F') urlRoot='freelancer';
        else if(accountType==='C') urlRoot = 'client';

        axios.post(`${urlRoot}/profile/${profile_id}/activate`,{ withCredentials: true}).then(res=>{
            console.log(res);
        })
    }

    useEffect(()=>{
        if(accountType !== 'F' || accountType !=='C'){
            setAccountType(cookies.getAll().type);
        }
    },[accountType]);

    return (  
        <div>
            {(accountType==='F') && <FreelancerNavbar profile_id={profile_id}/>}
            {(accountType==='C') && <ClientNavbar profile_id={profile_id}/>}
        <div className="profilesettings">
            <h1>Profile settings</h1>
            <form>
                <div>
                    <input type="text" placeholder="Job Title"/>
                </div>
                <div className="name_part">
                    <select>
                        <option value=""   disabled selected hidden>Choose Category</option>
                        {getCategoriesList()}
                    </select>
                    <input style={{marginLeft:20}} type="text" placeholder="Pay rate($/hr)"/>
                </div>
                <div>
                    <input type="text" placeholder="Description"/>
                </div>
                <div>
                    <input type="text" placeholder="Skills"/>
                </div>

                <div>
                <input placeholder="address"/>
                </div>
<div className="name_part">
<input type="text" style={{marginRight:20}} placeholder="phone"/>

<select>
<option value="" disabled selected hidden>Gender</option>                        
{getGenderList()}
</select>
</div>
                
                <div className="profile-attachmenents">
                    <input type="file"/>
                </div>
                <div>
                    <label>Status:</label> 
                    <button onClick={handleActivate} type="button">Activate</button>
                </div>
                <div>
                 <button type="button">Delete</button>
                </div>
                <button type="button">Done</button>

            </form>

        </div>
        </div>
    );
}
 
export default ProfileSettings;