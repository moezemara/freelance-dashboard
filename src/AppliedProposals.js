////////////Here you can find proposals data
var proposalName = "proposal 1";
var FreelancerName = "Ashmawy";
var FreelancerRate = 4.6;
var coverLetter =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis minus harum ducimus consequuntur iste, possimus quod reprehenderit aut, provident, dicta debitis inventore dolorum aperiam distinctio eveniet? Repellat dolorum natus ea consequatur sint ducimus reprehenderit corrupti id tempore, vitae pariatur magnam blanditiis earum, quo consectetur voluptates doloribus eligendi iusto, ab officia.";
var dueDate = 5555;
var recommendedPrice = 100;

const AppliedProposals = () => {
  return (
    <div className="appliedproposals">
      <h1>Applied Proposal</h1>
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

export default AppliedProposals;
