import ClientNavbar from "./ClientNavbar";
import FreelancerNavbar from "./FreelancerNavbar";
import Navbar from "./Navbar";
import Cookies from 'universal-cookie';
import { useState, useEffect } from "react";


const cookies = new Cookies();

const Page404 = () => {
    const [type,setType] = useState('');
    const [navbar,setNavbar] = useState();
    useEffect(()=>{
        setType(cookies.getAll().type);
        if(type==='C') setNavbar(<ClientNavbar/>);
        else if(type==="F") setNavbar(<FreelancerNavbar/>);
        else setNavbar(<Navbar/>);
    });

    return (
        <div>
            {navbar}
            <div className="page404">
                <h2>Page Not Found !</h2>
                <p>The page that you have requested cannot be found</p>
                { (type !== 'C' && type !== 'F') && <a  href="/">Back to Home Page?</a>}
            </div>
        </div>
    );
}
 
export default Page404;