const ProfileSettings = () => {
    return (  
        <div className="profilesettings">
            <form>
                <label>Job Title</label>
                <input type="text"/>
                <label>Category</label>
                <option>
                    <select value=""  disabled selected hidden>Choose Category</select>
                </option>
                <label>Description</label>
                <input type="text"/>
                <label>Skills</label>
                <input type="text"/>
                <label>Pay Rate ($/hour)</label>
                <input type="text"/>
                <label>Attachments</label>
                <button>Done</button>
            </form>
        </div>
    );
}
 
export default ProfileSettings;