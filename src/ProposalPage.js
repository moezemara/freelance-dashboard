
import dollarSymbol from "./src-images/dollar.png";
import JobCard from "./JobCard";
var totalMoney = 1000;
const ProposalPage = () => {
  return (
    <div >
      <div className="job-card-of-proposal">
<JobCard job={{}}/>
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

<div><table id="table-and-dollar-symbol">
<td id="dollar-symbol"><img src={dollarSymbol} height="120" alt="" /></td>
    <td>
<div className="price-card">
    <table>
    <tr>
    <td>total price</td>
    <td id="dollar-char">$</td>
    <td>{totalMoney}</td>
    </tr>

    <tr>
    <td>FreeLanco fees</td>
    <td id="dollar-char">$</td>
    <td>{totalMoney*0.2}</td>
    </tr>

    <tr>
    <td>your income</td>
    <td id="dollar-char">$</td>
    <td>{totalMoney*0.8}</td>
    </tr>
    </table>
</div>
</td>



</table></div>

          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProposalPage;
