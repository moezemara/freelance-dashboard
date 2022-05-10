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
            <h1>sara</h1>

            <label>Description</label>
                <div>
                    <textarea rows = "5" cols = "60"></textarea>
                </div>
                
                <hr />
                <hr /><hr /><hr />

            <label>Drag or upload project files</label>
            <input type="file"></input>
            <button>Sign Up</button>
            
        </div>
</div>
        

     );
}
 
export default ProposalPage;