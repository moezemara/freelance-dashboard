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
  const [passwordFieldsOkay, setPasswordFieldsOkay] = useState(false);
  const [confirmPasswordStartedTypying, setConfirmPasswordStartedTypying] = useState(false)

  const [returnedMsg, setReturnedMsg] = useState({"color":"green","msg":""})


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


  async function handleUpdateSettings() {
    if(
fname=="" ||
lname=="" ||
email=="" ||
address=="" ||
phone=="" ||
country=="" ||
(passwordChecked && (currentPassword=="" || newPassword==""|| confirmPassword==""))
){

  setReturnedMsg({"color":"red","msg":"You can leave no field blank"});

    }



    if(fname!= profileData.fname || lname != profileData.lname){
      const nameData = {
        fname:fname,
        lname:lname
      }
      const response = await axios.post(`account/update/name`, nameData, {withCredentials:true});
      console.log(response.data.success);
    }

    if(email != profileData.email){
      const emailData = {
        email:email
      }
      const response = await axios.post(`account/update/email`, emailData, {withCredentials:true});
      console.log(response.data.success);
    }
    
    if(phone != profileData.phone){
      const phoneData = {
        phone:phone
      }
      const response = await axios.post(`account/update/phone`, phoneData, {withCredentials:true});
      console.log(response.data.success);
    }


    //address and country
    if(address != profileData.address || country != profileData.country)
    {
      const addressData = {
        address : address,
        country : country
      }
      const response = await axios.post(`account/update/address`, addressData, {withCredentials:true});
      console.log(response.data.success);
    }


    //password
    if(passwordChecked && passwordFieldsOkay)
    {
      const passwordData = {
        currentPassword: currentPassword,
        newPassword : newPassword
      }


      const response = await axios.post(`account/update/password`, passwordData, {withCredentials:true});
      console.log(response.data.success);
    }
    }


  return (

    <div>
      {accountType === "F" && <FreelancerNavbar profile_id={profile_id} />}
      {accountType === "C" && <ClientNavbar profile_id={profile_id} />}

      <div className="accountsettings">
        <h1>Account settings</h1>

        <form action="">
        <hr />

  <input type="file" id="profilePictureSettings" />


<label > <b>Basic info</b></label>

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


          </div>

          <div className="name_part">
                    <input type="checkbox" defaultChecked={passwordChecked} onChange={() => setPasswordChecked(!passwordChecked)} style={{width:30}}/>
                    <label>I will change password</label>
                </div>



{ (passwordChecked)&&
<div>
<hr />
<label ><b>Changing password</b></label>
<input type="password" placeholder="Current Password" value={currentPassword} onInput={e=>setCurrentPassword(e.target.value)}/>
<input type="password" placeholder="New Password" value={newPassword} onInput={e=>setNewPassword(e.target.value)}/>
<input type="password" placeholder="Confirm New Password" value={confirmPassword} onInput={e=>setConfirmPassword(e.target.value)} onChange={e=>setConfirmPasswordStartedTypying(true)}/>
{ (confirmPasswordStartedTypying && confirmPassword!==newPassword) && <label style={{color:'red'}}>Passwords need to be identical to confirm password</label>}
<hr />
</div>
}



<button type="button" onClick={handleUpdateSettings}>Update Settings</button>
<button type="button" onClick={()=>{window.location = "/settings/"}}>Reset</button>

        </form>
        <label style={{ color: returnedMsg.color }}>{returnedMsg.msg}</label>

      </div>
    </div>
  );
};

export default AccountSettings;
