import serviceImage from './src-images/service-logo.png'

const ProposalCard = (props) => {
    const title = props.proposal.title;
    const freelancerName = props.proposal.freelancerName;
    const freelancerRate = props.proposal.freelancerRate;
    const coverLetter = props.proposal.coverLetter;
    const dueDate = props.proposal.dueDate;
    const price = props.proposal.price;      

    return (  
        <div className="proposalcard" key={props.proposal.id}>
            <h2>{title}</h2>
            <p><b>Freelancer Name: </b>{freelancerName}</p>
            <p><b>Freelancer Rate: </b>{freelancerRate}</p>
           
            <b>Cover letter</b>
            <p>{coverLetter}</p>
            <p><b>Due Date: </b>{dueDate}</p>
            <p><b>Recommended Price: </b>{price}$</p>
            <div style={{display:'flex'}}>
                <label><b>Attachements</b></label>
                <a><img src={serviceImage}/></a>
            </div>
        </div>
    );
}
 
export default ProposalCard;