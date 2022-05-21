const JobCard = (props) => {
    const title = props.job.title;
    const price = props.job.price;
    const skills = props.job.skills;
    const category = props.job.category;
    const description = props.job.description;
    const attatchment =props.job.attatchment;


    const convertSkillsToButtons = (skillsList)=>{
        return (  
            skillsList.map((skill)=>(<button className="attachments-buttons">{skill}</button>))
     );
    }

    return ( 
        <div className="jobcard">
            <div className="jobcardmain">
                <h3>{title}</h3>
                <p><b>Description:</b> {description}</p>
                <p><b>Price:</b> {price}$</p>
                <p><b>Category:</b>{category}</p>
                <p><b style={{marginRight:10}}>Skills: </b> {convertSkillsToButtons(skills)}</p>                <p><b>Attachments:</b>
                <a style = {{marginLeft:10}} href={attatchment}> <button className="attachments-buttons">attatchment here</button></a>

                </p>


            </div>
            <div style={{marginLeft:'auto'}}>
                <button style={{marginLeft:10}}>Apply</button>
            </div>
        </div>
     );
}
 
export default JobCard;
