import { useEffect, useState } from "react";
import { getCategoriesList, getGenderList } from "./Options.js";
import Cookies from "universal-cookie";
import FreelancerNavbar from "./FreelancerNavbar.js";
import ClientNavbar from "./ClientNavbar.js";
import { useParams } from "react-router-dom";
import axios from "./axios.js";

const ProfileSettings = () => {
  const [accountType, setAccountType] = useState();
  const { profile_id } = useParams();
  const cookies = new Cookies();
  const [ActivateMessage, setActivateMessage] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [pay_rate, setPayRate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  async function handleSettings() {
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

    if (response.data.success) {
      console.log(response);
      document.cookie = JSON.stringify({ type: response.data.message.type });
    } else {
      console.log("failed");
    }
  }

  const handleActivate = () => {
    var urlRoot = "";
    if (accountType === "F") urlRoot = "freelancer";
    else if (accountType === "C") urlRoot = "client";

    axios
      .post(`${urlRoot}/profile/${profile_id}/activate`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success === 1) {
          setActivateMessage("Successfully Activated!");
        }
      });
  };

  const handleDelete = () => {
    var urlRoot = "";
    if (accountType === "F") urlRoot = "freelancer";
    else if (accountType === "C") urlRoot = "client";

    axios
      .post(`${urlRoot}/profile/${profile_id}/delete`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success === 1) {
          window.location = "/profile/";
        }
      });
  };

  useEffect(() => {
    if (accountType !== "F" || accountType !== "C") {
      setAccountType(cookies.getAll().type);
    }
  }, [accountType]);

  return (
    <div>
      {accountType === "F" && <FreelancerNavbar profile_id={profile_id} />}
      {accountType === "C" && <ClientNavbar profile_id={profile_id} />}
      <div className="profilesettings">
        <h1>Profile settings</h1>
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
            />{" "}
          </div>
          <div>
            <input
              type="text"
              placeholder="Skills"
              value={skills}
              onInput={(e) => setSkills(e.target.value)}
            />{" "}
          </div>

          <div>
            <input
              placeholder="address"
              value={address}
              onInput={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="name_part">
            <input
              type="text"
              style={{ marginRight: 20 }}
              placeholder="phone"
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
            />

            <select value={gender} onInput={(e) => setGender(e.target.value)}>
              <option value="" disabled selected hidden>
                Gender
              </option>
              {getGenderList()}
            </select>
          </div>

          {/* <div className="profile-attachmenents">
                    <input type="file"/>
                </div> */}

<button type="button" onClick={handleSettings}>
            Create profile
          </button>        </form>
        <div className="profilepageactivitiesNavbar">
          <button onClick={handleActivate} type="button">
            Activate
          </button>
          <button onClick={handleDelete} type="button">
            Delete
          </button>
        </div>
        <label style={{ color: "green" }}>{ActivateMessage}</label>
      </div>
    </div>
  );
};

export default ProfileSettings;
