const Navbar = () => {
    return (  
         <nav className="navbar">
            <a href="/"><h2>Freelanco</h2></a>
            <div className="links">
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
            </div>
        </nav>
    );
}
 
export default Navbar;