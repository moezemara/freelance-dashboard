const AppliedProposalCard = (props) => {

    var proposalName = props.proposalName;
    var FreelancerName = props.FreelancerName;
    var FreelancerRate = props.FreelancerRate;
    var coverLetter = props.coverLetter;
    var dueDate = props.dueDate;
    var recommendedPrice = props.recommendedPrice;
    
      return (
        <div className="appliedproposalcard">
          <h2>{proposalName}</h2>

          <h3>Freelancer Name: {FreelancerName}</h3>
          <h3>Freelancer Name: {FreelancerRate} stars</h3>
    
          <h3>Cover letter</h3>
          <p>{coverLetter}</p>
    
          <h3>Due Date: {dueDate}</h3>
          <h3>Recommended price: {recommendedPrice} $</h3>
    
          <h3>Attachements</h3>
          <button className="attachments-buttons">Attachment 1</button>
          <button className="attachments-buttons">Attachment 2</button>
    
          <hr />
          <div className="accept-proposal">
            <button>Accept proposal</button>
          </div>
        </div>
      );
    };
    
    export default AppliedProposalCard;
    