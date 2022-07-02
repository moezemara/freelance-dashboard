import Cookies from "universal-cookie";

const accountCheck = ()=>{
    const cookies = new Cookies();
    const accountType = cookies.getAll().type;
    if(accountType !== 'F' && accountType !== 'C'){
        window.location="/login";
    }
}
export default accountCheck;