import ClientNavbar from "../navbars/ClientNavbar";
import FreelancerNavbar from "../navbars/FreelancerNavbar";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JobCardForProposal from "./JobCardForProposal";
import dollarSymbol from "../src-images/dollar.png";
import axios from "../axios.js";
import { useParams } from "react-router-dom";
import AppliedProposalCard from "../proposals/AppliedProposalCard";

const JobPage = ()=>{
    const cookies = new Cookies();
    const accountType = cookies.getAll().type;
    const profile_id = cookies.getAll().active_id;
    const [jobData, setJobData] = useState();
    const [appliedProposalsData, setAppliedProposalsData] = useState();
    const job_id = useParams().job_id;
    const [resMessage, setResMessage] = useState();

//proposal data
    const [cover_letter, setCoverLetter] = useState("");
    const [price, setPrice] = useState("");
    const [expected_date, setExpectedDate] = useState("");
    const [attachment, setAttachment] = useState("");




    useEffect(()=>{
      if((!jobData)){
        axios.get(`job/browse/${job_id}`,{ withCredentials: true}).then(res=>{
            if(res.data.success===1){
              setJobData(res.data.message);
                console.log(res);
            }
            else{
                window.location = '/*';
            }

      });
    }},[jobData]);



    async function handleSendProposal() {
        console.log(process.env.BASE_API_URL);
        const data = {
          cover_letter: cover_letter,
          price: price,
          expected_date: (new Date(expected_date)).getTime(),
        };
    
        const response = await axios.post(`/proposal/apply/${job_id}`, data, {
          withCredentials: true,
        }); //for sending cookies
        setResMessage(response.data.message)

        if (response.data.success) {
          document.cookie = JSON.stringify({ type: response.data.message.type });
          console.log(response);
        } else {
          console.log("failed");
        }
      }

    useEffect(()=>{

      if(accountType==='C'){
        if(!appliedProposalsData){
          axios.get(`/proposal/get/proposals/${job_id}`,{withCredentials:true}).then((res)=>{
            setAppliedProposalsData(res.data.message);
            console.log(res);
          });
        }
      }
    },[appliedProposalsData])




    return(
        <div>
            {(accountType==='C') && <ClientNavbar profile_id={profile_id}/>}
            {(accountType==='F') && <FreelancerNavbar profile_id={profile_id}/>}
            <div className="jobpage">
            <div>
      <div className="job-card-of-proposal">
       { jobData && <JobCardForProposal
          job={{
            title: jobData.title,
            price: jobData.expected_price,
            skills: jobData.skills,
            category: jobData.category,
            description: jobData.description,
            attatchment: jobData.attachment
          }}
        />
        }
      </div>
    {(accountType==='C' && (Array.isArray(appliedProposalsData))) &&
      <h3>Applied Proposals</h3>
    }
    {(accountType==='C' && Array.isArray(appliedProposalsData)) &&
      (appliedProposalsData.map((proposal)=>(
        <AppliedProposalCard proposal={proposal}/>
      )))
    }
    { (accountType==='F') &&
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
              value={cover_letter}
              onInput={(e) => setCoverLetter(e.target.value)}
            ></textarea>
          </div>
          <hr />
          <label>Drag or upload project files </label>
          <div className="proposal-attachments">
            <input
              type="file"
              value={attachment}
              onInput={(e) => setAttachment(e.target.value)}
            ></input>
          </div>
          <hr />
          <label>
            Add due data and proposed money <br />
            <br />
          </label>
          <div className="proposal-details">
            <input
              type="date"
              placeholder="Due Date"
              value={expected_date}
              onInput={(e) => setExpectedDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Money $"
              value={price}
              onInput={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <table id="table-and-dollar-symbol">
              <td id="dollar-symbol">
                <img src={dollarSymbol} height="120" alt="" />
              </td>
              <td>
                <div className="price-card">
                  <table>
                    <tr>
                      <td style={{ width: "90%" }}>total price</td>
                      <td id="dollar-char">$</td>
                      <td>{price * 1.0}</td>
                    </tr>

                    <tr>
                      <td style={{ width: "90%" }}>HomieLancer fees</td>
                      <td id="dollar-char">$</td>
                      <td>{price * 0.2}</td>
                    </tr>

                    <tr>
                      <td style={{ width: "90%" }}>your income</td>
                      <td id="dollar-char">$</td>
                      <td>{price * 0.8}</td>
                    </tr>
                  </table>
                </div>
              </td>
            </table>
          </div>
          <button type="button" onClick={handleSendProposal}>
            submit proposal
          </button>{" "}
          <label>{resMessage}</label>
        </form>
      </div>
    }
    </div>
        </div>
        </div>
    );
}

export default JobPage;