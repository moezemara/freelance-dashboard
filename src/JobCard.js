const JobCard = (props) => {
    const title = props.title;
    const price = props.price;
    return ( 
        <div className="jobcard">
            <div className="jobcardmain">
                <h2>{title}</h2>
                <h4 style={{color:'gray'}}>{price}$</h4>
            </div>
            <div style={{marginLeft:'auto'}}>
                <button>Details</button>
            </div>
        </div>
     );
}
 
export default JobCard;
