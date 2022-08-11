import axios from "../shared/axios.js"
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";


const FreelancerNavbar = (props) => {

    const history  = useHistory(); 
    const profile_id = props.profile_id;
    const [activeProfileId, setActiveProfileId] = useState('');

    const cookies = new Cookies();
    async function handleLogOut(){
        console.log(process.env.BASE_API_URL)
        axios.post('user/logout',{ withCredentials: true}).then((res)=>{
            if(res.data.success===1) window.location='/login';
        });
    }

    const [accountType,setAccountType] = useState('');


    
    async function getAccountType(){
        const type = await cookies.getAll().type;
        await setAccountType(type);
    }
    

    useEffect(()=>{
        if(accountType !== 'F' || accountType !== 'C'){
            getAccountType();
        }
        
        if(accountType==='F'){
            
            axios.get('freelancer/profile/',{ withCredentials: true}).then(res=>{
                console.log(res);
                if(res.data.success===1){
                    setActiveProfileId(res.data.message.active_id);
                    document.cookie = 'active_id='+res.data.message.active_id;
                }
                else if(res.data.message!=="you have not created a profile yet"){
                    history.push("/login");
                }
        });
        }},[accountType]);


    return (
        <Navbar bg="white" expand="lg">
            <Container>
            <Navbar.Brand href="/profile/">HomieLancer</Navbar.Brand>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
                <Nav.Link href="/browsejobs">Find work</Nav.Link>
                <Nav.Link href="/createprofile">Add Profile</Nav.Link>
                <Nav.Link href="/activitiespage">All Activities</Nav.Link>
                <Nav.Link href="/payement">Payement</Nav.Link>
                <Nav.Link href={`/profilesettings/${profile_id}`}>Settings</Nav.Link>
                <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default FreelancerNavbar;