var totalMoney = 0;

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
        <h2>Proposal</h2>
        <hr />

        <form action="">
          <label>
            Cover Letter
            <br />
          </label>
          <div>
            <textarea
              placeholder="write your cover letter here"
              rows="5"
              cols="100"
            ></textarea>
          </div>

          <hr />
          <label>Drag or upload project files </label>
          <div className="proposal-attachments">
            <input type="file"></input>
          </div>
          <hr />
          <label>
            Add due data and proposed money <br />
            <br />
          </label>
          <div className="proposal-details">
            <input type="date" placeholder="Due Date" />
            <input type="text" placeholder="Money $" />
          </div>
<hr />


<div className="price-card">
    <table>
    <tr>
    <td>total price</td>
    <td>{totalMoney}</td>
    </tr>

    <tr>
    <td>FreeLanco fees</td>
    <td>{totalMoney*0.2}</td>
    </tr>

    <tr>
    <td>your income</td>
    <td>{totalMoney*0.8}</td>
    </tr>
    </table>
    
</div>



          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProposalPage;
