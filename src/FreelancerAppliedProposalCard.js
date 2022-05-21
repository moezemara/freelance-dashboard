import axios from "./axios.js"


const FreelancerAppliedProposalCard = (props)=>{
    
    const job_id = props.job_id;
    const price = props.price;
    const cover_letter = props.cover_letter;   
    const client_profile = props.client_profile;
    const proposal_id = props.proposal_id;
    

    const handleWidthdraw = ()=>{
        axios.post(`/proposal/${proposal_id}/widthdrawproposal`,{ withCredentials: true}).then((res)=>{
            if(res.data.success===1){
                window.location = '/activitiespage';
            }
            else{
                console.log(res);
            }
        });
    }

    return (
        <div className="appliedproposalcard">

          
    
          <h3>Cover letter</h3>
          <p>{cover_letter}</p>
    
          <h3>Recommended price: {price} $</h3>
    
          <h3>Attachements</h3>
          <button className="attachments-buttons">Attachment 1</button>
          <button className="attachments-buttons">Attachment 2</button>
    
          <hr />
          <div className="accept-proposal">
            <button onClick={()=>{window.location=`job/${job_id}`}}>Job Details</button>
            <button onClick={()=>{window.location=`profile/${client_profile}`}}>Client Profile</button>
            <button onClick={handleWidthdraw}>Withdraw</button>
          </div>
        </div>
      );
}

export default FreelancerAppliedProposalCard;