import FreelancerNavbar from "./FreelancerNavbar.js";
import { getCategoriesList, getGenderList } from "./Options.js";
import { useState, useEffect, createRef } from "react";
import axios from "./axios.js";

const MakeProfile = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [pay_rate, setPayRate] = useState("");

  async function handleCreateProfile() {
    console.log(process.env.BASE_API_URL);
    const data = {
      title: title,
      category: category,
      skills: skills.split(","),
      description: description,
      pay_rate: pay_rate,
    };

    const response = await axios.post("freelancer/profile", data, {
      withCredentials: true,
    });

    setJobMessage(response.data.message);

    if (response.data.success) {
      console.log(response);
      document.cookie = JSON.stringify({ type: response.data.message.type });
    } else {
      console.log("failed");
    }
  }

  return (
    <div>
      <FreelancerNavbar />
      <div className="profilesettings">
        {" "}
        {/*let its name profilesettings as changing its name make a lot of trouble in styling*/}
        <h1>Make your profile</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Job Title"
              value={title}
              onInput={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="name_part">
            <select
              value={category}
              onInput={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Choose Category
              </option>
              {getCategoriesList()}
            </select>
            <input
              style={{ marginLeft: 20 }}
              type="text"
              placeholder="Pay rate($/hr)"
              value={pay_rate}
              onInput={(e) => setPayRate(e.target.value)}
            />
          </div>
          <div>
            <textarea
              id="description-make-profile"
              type="text"
              style={{ height: "100px" }}
              placeholder="Description"
              value={description}
              onInput={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Skills"
              value={skills}
              onInput={(e) => setSkills(e.target.value)}
            />
          </div>

          {/* <div className="profile-attachmenents">
                    <input type="file"/>
                </div>                 */}

          <button type="button" onClick={handleCreateProfile}>
            Create profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeProfile;
