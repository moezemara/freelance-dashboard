import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import ClientNavbar from "../navbars/ClientNavbar";
import FreelancerNavbar from "../navbars/FreelancerNavbar";
import countries from '../data/countries.json'

const AccountSettings = () => {
  const [accountType, setAccountType] = useState();
  const { profile_id } = useParams();
  const cookies = new Cookies();
  const [profileData,setProfileData] = useState("")
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [passwordChecked, setPasswordChecked] = useState(false);


  useEffect(() => {
    if (accountType !== "F" || accountType !== "C") {
      setAccountType(cookies.getAll().type);
    }
  }, [accountType]);


  useEffect(()=>{

      axios.get(`/user/profile`,{ withCredentials: true}).then(res=>{ 
        if(res.data.success===1){
          setProfileData(res.data.message);
          setFname(res.data.message.fname)
          setLname(res.data.message.lname)
          setAddress(res.data.message.address)
          setEmail(res.data.message.email)
          setUsername(res.data.message.username)
          setPhone(res.data.message.phone)

          console.log(res);
        }
        else{
            console.log(res);
                
      }},[]);
      
  },[]);


  return (
    <div>
      {accountType === "F" && <FreelancerNavbar profile_id={profile_id} />}
      {accountType === "C" && <ClientNavbar profile_id={profile_id} />}

      <div className="accountsettings">
        <h1>Account settings</h1>

        <form action="">
          <div className="name_part">
            <input
              type="text"
              style={{ marginRight: 10 }}
              placeholder="First name"
              value={fname}
              onInput={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lname}
              onInput={(e) => setLname(e.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />

          <div className="name_part">
            <input
              type="text"
              style={{ marginRight: 10 }}
              placeholder="Username"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
            />

           
          </div>

          <input
            type="text"
            placeholder="address"
            value={address}
            onInput={(e) => setAddress(e.target.value)}
          />

          <div className="name_part">
            <input
              type="tel"
              style={{ marginRight: 10 }}
              placeholder="phone"
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
            />


                <select value={country} onInput={e=>setCountry(e.target.value)}>
                     {Object.keys(countries.Name).map((key,i)=>(
                          <option value={countries.Code[key]} key={i}>{countries.Name[key]}</option>
                      ))}      
                </select>


            {/* <select value={sex} onInput={(e) => setSex(e.target.value)}>
              <option value="" disabled selected hidden>
                Gender
              </option>
              <option value="M">male</option>
              <option value="F">female</option>
            </select> */}
          </div>

          <div className="name_part">
                    <input type="checkbox" defaultChecked={passwordChecked} onChange={() => setPasswordChecked(!passwordChecked)} style={{width:30}}/>
                    <label>I will change password</label>
                </div>



{ (passwordChecked)&&
<div>
<hr />
<label >Changing password</label>
<input type="password" placeholder="Current Password" value={currentPassword} onInput={e=>setCurrentPassword(e.target.value)}/>
<input type="password" placeholder="New Password" value={newPassword} onInput={e=>setNewPassword(e.target.value)}/>
<input type="password" placeholder="Confirm New Password" value={confirmPassword} onInput={e=>setConfirmPassword(e.target.value)}/>
{ (confirmPassword!==newPassword) && <label style={{color:'red'}}>Password needs to be confirmed</label>}
</div>
}

        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
