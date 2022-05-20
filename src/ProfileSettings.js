import {getCategoriesList, getGenderList} from './Options.js'


const ProfileSettings = () => {

    return (  
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
                    <button type="button">Activate</button>
                </div>
                <div>
                 <button type="button">Delete</button>
                </div>
                <button type="button">Done</button>

            </form>

        </div>
    );
}
 
export default ProfileSettings;