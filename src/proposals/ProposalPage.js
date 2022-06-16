import dollarSymbol from "../src-images/dollar.png";
import JobCardForProposal from "../jobs/JobCardForProposal";
import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";

const ProposalPage = () => {
  const [cover_letter, setCoverLetter] = useState("");
  const [price, setPrice] = useState("");
  const [expected_date, setExpectedDate] = useState("");
  const [attachment, setAttachment] = useState("");

  async function handleSendProposal() {
    console.log(process.env.BASE_API_URL);
    const data = {
      cover_letter: cover_letter,
      price: price,
      expected_date: expected_date,
      attachment: attachment,
    };

    const response = await axios.post("user/proposal", data, {
      withCredentials: true,
    }); 
    console.log(response);
    if (response.data.success) {
      document.cookie = JSON.stringify({ type: response.data.message.type });
      window.location = "/browsejobs";
    } else {
      console.log("failed");
    }
  }

  return (
    <div>
      <div className="job-card-of-proposal">
        <JobCardForProposal
          job={{
            title: "Job Card Example",
            price: "1800",
            skills: "api, dashboard, web dev",
            category: "web",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat molestias iste corrupti nemo modi consequatur consectetur accusantium praesentium laboriosam nostrum, assumenda quaerat quas at expedita, quos cumque repellendus pariatur deleniti. Incidunt similique consequatur, modi tempora numquam, dolorem soluta porro at magni illo dignissimos repellendus amet pariatur! Minus, quod quibusdam!",
            attatchment:
              "https://www.zewailcity.edu.eg/media-library/PDFs/Academic_Calendar_2021-2022__2022-02-16052857.pdf",
          }}
        />
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
        </form>
      </div>
    </div>
  );
};

export default ProposalPage;
