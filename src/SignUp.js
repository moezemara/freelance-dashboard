const SignUp = () => {
    
    return (  
        <div className="signup">
            <h2>Sign Up To Freelanco</h2>
            <form>
                
                <div className="name_part">
                    <input type="text" style={{marginRight:10}} placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                </div>
                
                <input placeholder="Email"/>
                
                <div className="name_part">
                    <input type="text" style={{marginRight:10}} placeholder="Username"/>
                    <select>
                        <option value="" disabled selected hidden>Choose Your Country</option>
                        <option value="Lebnon">Lebnon</option>
                        <option value="Egypt">Egypt</option>
                    </select>
                </div>

                <input placeholder="Password"/>
                <input placeholder="Confirm Password"/>

                <div className="name_part">
                    <label>Join</label>
                    <input type="radio" value="client" name="joinAs"/>
                    <label>Client</label>
                    <input type="radio" value="freelancer" name="joinAs"/>
                    <label>Freelancer</label>
                </div>

                <div className="name_part">
                    <input type="checkbox" style={{width:30}}/>
                    <label>I agree to terms & conditions</label>
                </div>


                <button>Sign Up</button>
            </form>
        </div>
    );
}

 
export default SignUp
