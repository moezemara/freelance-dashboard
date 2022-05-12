import serviceImage from './src-images/service-logo.png'

const ContractCard = (props) => {
    const contract = props.contract;
    return (  
        <div className="contractcard" key={contract.id}>
            <p><b>Client Name: </b>{contract.clientName} </p>
            <p><b>Freelancer Name: </b>{contract.freelancerName}</p>
            <b>Description</b>
            <p>{contract.description}</p>
            <p><b>Final Price: </b>{contract.price}$</p>
            <div style={{display:'flex'}}>
                <label></label>
                <a><img src={serviceImage}/></a>
            </div>
        </div>
    );
}
 
export default ContractCard;