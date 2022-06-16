import axios from "./axios.js"


const AppliedProposalCard = (props) => {

    var proposalName = props.proposal.proposalName;
    var FreelancerName = props.proposal.freelancer_name;
    var FreelancerRate = props.proposal.freelancer_rate;
    var cover_letter = props.proposal.cover_letter;
    var recommendedPrice = props.proposal.price;
    var proposal_id = props.proposal.proposal_id;
    var job_id = props.proposal.job_id;
    var freelancer_id = props.proposal.freelancer_profile_id


    const handleAccept = ()=>{
      axios.post(`/contract/proposal/${proposal_id}/accept`).then((res)=>{
        if(res.data.success===1){
          window.location = `/contract/${proposal_id}`;
        }
        else{
          console.log(res);
          console.log("failed");
        }
    });

    }

    const handleReject = ()=>{
      axios.post(`/proposal/${proposal_id}/withdraw`,{ withCredentials: true}).then((res)=>{
          if(res.data.success===1){
              window.location = `/job/${job_id}`;
          }
          else{
              console.log(res);
          }
      });
  }


      return (
        <div className="appliedproposalcard">
          <h2>{proposalName}</h2>

          <h3>Freelancer Name: <a href={`/profile/${freelancer_id}`}>{FreelancerName}</a></h3>
          <h3>Freelancer Rate: {FreelancerRate}</h3>
    
          <h3>Cover letter</h3>
          <p>{cover_letter}</p>
    
          <h3>Price: {recommendedPrice} $</h3>
    
          <h3>Attachements</h3>
          <button className="attachments-buttons">Attachment 1</button>
          <button className="attachments-buttons">Attachment 2</button>
    
          <hr />
          <div className="accept-proposal">
            <button onClick={handleAccept}>Accept Proposal</button>
            <button onClick={handleReject}>Reject</button>
          </div>
        </div>
      );
    };
    
    export default AppliedProposalCard;
    