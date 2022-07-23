import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

import ClientNavbar from "../navbars/ClientNavbar";
import FreelancerNavbar from "../navbars/FreelancerNavbar";




const AccountSettings = ()=>{

    const [accountType, setAccountType] = useState();
    const { profile_id } = useParams();
    const cookies = new Cookies();


    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [type,setType] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [sex, setSex] = useState('');
    

    useEffect(() => {
        if (accountType !== "F" || accountType !== "C") {
          setAccountType(cookies.getAll().type);
        }
      }, [accountType]);

return(
<div>

{accountType === "F" && <FreelancerNavbar profile_id={profile_id} />}
      {accountType === "C" && <ClientNavbar profile_id={profile_id} />}


      <div className="accountsettings">
      <h1>Account settings</h1>
        

        



      </div>

</div>
);
}



export default AccountSettings