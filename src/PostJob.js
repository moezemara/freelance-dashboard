import { useEffect } from "react";

const PostJob = () => {

    useEffect(()=>{});

    return (
        <div className="postjob">
            <h2>Post a Job</h2>
            <form>
                <div>
                    <label>Job Title</label>
                    <input type="text"/>
                </div>
                <hr/>
                <div>
                    <label>Category:</label>
                    <select>
                        <option value=""  disabled selected hidden >Select Category</option>
                    </select>
                </div>
                <hr/>
                <label>Description</label>
                <div>
                    <textarea rows = "5" cols = "60"></textarea>
                </div>
                <hr/>                
                <div>
                    <label>Skills</label>
                    <input type="text"/>
                </div>
                <hr/>
                <div>
                    <label>Pay rate(s/hour)</label>
                    <input type="text"/>
                </div>
                <hr/>
                <div>
                    <label>Needed Level</label>
                    <select>
                        <option value=""  disabled selected hidden >Select level</option>
                        <option value="entery">Entry Level</option>
                        <option value="intermediate">Intermediate Level</option>
                        <option value="advanced">Advanced Level</option>
                    </select>
                </div>
                <hr/>
                <div>

                    <label>Estimated total work time</label>
                </div>
                <div>
                    <input type="text" placeholder="Estimated Total Time"/>
                    <select>
                        <option value="hour" selected>Hour</option>
                        <option value="day">Day</option>
                    </select>
                </div>
                <hr/>
                <div>
                    <label>Work Load (hours/week)</label>
                    <input type="text"/>
                </div>
                <hr/>
                <button>Post Job</button>
            </form>
        </div>
    );
}
 
export default PostJob;