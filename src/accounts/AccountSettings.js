import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

import ClientNavbar from "../navbars/ClientNavbar";
import FreelancerNavbar from "../navbars/FreelancerNavbar";

const AccountSettings = () => {
  const [accountType, setAccountType] = useState();
  const { profile_id } = useParams();
  const cookies = new Cookies();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [sex, setSex] = useState("");

  useEffect(() => {
    if (accountType !== "F" || accountType !== "C") {
      setAccountType(cookies.getAll().type);
    }
  }, [accountType]);

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

            {/*
            
            country??
            */}
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

            <select value={sex} onInput={(e) => setSex(e.target.value)}>
              <option value="" disabled selected hidden>
                Gender
              </option>
              <option value="M">male</option>
              <option value="F">female</option>
            </select>
          </div>


<hr />
<label >passwords</label>
<input type="password" placeholder="Current Password" value={currentPassword} onInput={e=>setCurrentPassword(e.target.value)}/>
<input type="password" placeholder="New Password" value={newPassword} onInput={e=>setNewPassword(e.target.value)}/>
<input type="password" placeholder="Confirm New Password" value={confirmPassword} onInput={e=>setConfirmPassword(e.target.value)}/>
{ (confirmPassword!==newPassword) && <label style={{color:'red'}}>Password needs to be confirmed</label>}
               

        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
