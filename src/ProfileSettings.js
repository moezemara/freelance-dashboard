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
                <div className="profile-attachmenents">
                    <input type="file"/>
                </div>                
                <button>Done</button>

            </form>

        </div>
    );
}
 
export default ProfileSettings;