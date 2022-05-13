const JobCard = (props) => {
    const title = props.title;
    const price = props.price;
    const description = props.description;
    return ( 
        <div className="jobcard">
            <div className="jobcardmain">
                <h3>{title}</h3>
                <p><b>Description:</b> {description}</p>
                <p>Price:<b>{price}$</b></p>
            </div>
            <div style={{marginLeft:'auto'}}>
                <button style={{marginLeft:10}}>Details</button>
            </div>
        </div>
     );
}
 
export default JobCard;
