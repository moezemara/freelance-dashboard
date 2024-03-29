import { useEffect, useState } from "react";
import { getCategoriesList, getGenderList } from "../Options.js";
import Cookies from "universal-cookie";
import FreelancerNavbar from "../navbars/FreelancerNavbar.js";
import ClientNavbar from "../navbars/ClientNavbar.js";
import { useParams } from "react-router-dom";
import axios from "../shared/axios.js";
import accountCheck from "../shared/accountCheck.js";


const ProfileSettings = () => {
  const cookies = new Cookies();

  const [accountType, setAccountType] = useState();
  const { profile_id } = useParams();
  const [active_profile_id, setActiveId] = useState(cookies.getAll().active_id)
  const [profile_data,setProfileData] = useState({profile:{}, account:{}});


  const [title, setTitle] = useState(profile_data.profile.title);
  const [category, setCategory] = useState(profile_data.profile.category);
  const [skills, setSkills] = useState(profile_data.profile.skills);
  const [description, setDescription] = useState(profile_data.profile.description);
  const [pay_rate, setPayRate] = useState(profile_data.profile.pay_rate);
  const [returnedMsg, setReturnedMsg] = useState({"color":"green","msg":""})



  useEffect(()=>{

    accountCheck();
  


    axios.get(`/freelancer/profile/${profile_id}`,{ withCredentials: true}).then(res=>{ 
      if(res.data.success===1){
        setProfileData(res.data.message);
        setTitle(res.data.message.profile.title);
        setCategory(res.data.message.profile.category);
        const myskills = JSON.parse(res.data.message.profile.skills).join(",");
        console.log(myskills);
        setSkills(myskills);
        setDescription(res.data.message.profile.description );
        setPayRate(res.data.message.profile.pay_rate);
      }
      },[]);
      
  },[]);


//will use the current state that will passed to it through api
  

  async function handleSettings() {
    console.log(process.env.BASE_API_URL);
    const data = {
      title: title,
      category: category,
      skills: skills.split(","),
      description: description,
      pay_rate: pay_rate,
    };


    const response = await axios.post(`freelancer/profile/${profile_id}/update`, data, {
      withCredentials: true,
    });

    console.log(response.data.success);
    if(response.data.success===1){
      setReturnedMsg({"color":"green","msg":"Successfully Updated"});
    }
    else{
      setReturnedMsg({"color":"red","msg":response.data.message});
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
          setReturnedMsg({"color":"green","msg":"Successfully Activated!"});
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
        else{
          setReturnedMsg({"color":"red","msg":res.data.message});
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


          <button type="button" onClick={handleSettings}>Update profile</button> 
            </form>
        <div className="profilepageactivitiesNavbar">
          <button id="button-to-be-green" onClick={handleActivate} type="button">
            Activate
          </button>
          <button id="button-to-be-red" onClick={handleDelete} type="button">
            Delete
          </button>
        </div>
        <label style={{ color: returnedMsg.color }}>{returnedMsg.msg}</label>
      </div>
    </div>
  );
};

export default ProfileSettings;
