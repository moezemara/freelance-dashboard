const ProposalPage = () => {
    return ( 
<div>
        <div className="proposalpage">
            <div></div>
            <h2>here is a card to preview the job</h2>   
        </div>

        <div className="proposalpage">
            <div></div>
            <h2>here is a card to view job activity</h2>   
        </div>

        <div className="proposalpage">
            <div></div>
            <h1>Proposal</h1>
            <hr />

            <label>Cover Letter<br/></label>
                <div>
                    <textarea placeholder="write your cover letter here"
                    rows = "5" cols = "100"></textarea>
                </div>
                
<hr />
            <label>Drag or upload project files </label>
            <div className="proposal-attachments">
            <input type="file"></input>
            </div>

            <div className="proposal-details">
                    <input type="text" style={{marginRight:10}} placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                </div>
        



            <button>Sign Up</button>
        </div>
</div>
        

     );
}
 
export default ProposalPage;