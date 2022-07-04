import axios from "../axios.js"
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import bell from "../src-images/bell.png"
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ClientNavbar = (props) => {

    const profile_id = props.profile_id;
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
        if(!type){window.location="/login";}
        await setAccountType(type);
    }
    

    useEffect(()=>{
        if(accountType !== 'F' || accountType !== 'C'){
            getAccountType();
        }
        if(accountType==='C'){
            axios.get('client/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    console.log(res);
                }
                else{
                    window.location = '/login';
                }},[]);
        }
    },[accountType]);

    return ( 
        <Navbar bg="white" expand="lg">
            <Container>
            <Navbar.Brand href="/profile/">HomieLancer</Navbar.Brand>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="/postjob">Post a Job</Nav.Link>
                <Nav.Link href="/activitiespage">All Activities</Nav.Link>
                <Nav.Link href="/payement">Payement</Nav.Link>
                <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default ClientNavbar;