const ProfileSettings = () => {
    return (  
        <div className="profilesettings">
            <form>
                <div>
                    <input type="text" placeholder="Job Title"/>
                </div>
                <div>
                    <select>
                        <option value=""  disabled selected hidden>Choose Category</option>
                        <option value="Web development">Web development</option>
                        <option value="Machine Learning">Machine Learning</option>
                    </select>
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


                <input placeholder="address"/>

<div className="name_part">
<input type="text" style={{marginRight:10}} placeholder="phone"/>

<select>
<option value="" disabled selected hidden>Gender</option>                        
<option value="male">male</option>
<option value="female">female</option>
<option value="others">others</option>
</select>
</div>
                
                <div className="profile-attachmenents">
                    <input type="file"/>
                </div>                
                <button>Done</button>

            </form>

        </div>
    );
}
 
export default ProfileSettings;