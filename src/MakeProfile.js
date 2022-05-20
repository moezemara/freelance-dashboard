import FreelancerNavbar from './FreelancerNavbar.js';
import {getCategoriesList, getGenderList} from './Options.js'

const MakeProfile = () => {
    return (  
        <div>
        <FreelancerNavbar/>
        <div className="profilesettings"> {/*let its name profilesettings as changing its name make a lot of trouble in styling*/}
            <h1>Make your profile</h1>
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
                    <input type="text" placeholder="Pay rate($/hr)"/>
                </div>

                <div>
                <input placeholder="address"/>
                </div>
<div className="name_part">
<input type="text" style={{marginRight:10}} placeholder="phone"/>

<select>
<option value="" disabled selected hidden>Gender</option>                        
{getGenderList()}
</select>
</div>
                
                <div className="profile-attachmenents">
                    <input type="file"/>
                </div>                
                <button>make profile</button>

            </form>

        </div>
        </div>
    );
}
 
export default MakeProfile;