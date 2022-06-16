import logo from "../src-images/homie-logo-1.png";

const NavbarWide = () => {
  return (
    <nav className="navbarwide">
      <a href="/">
        <table id="table-of-home-logo">
          <td>
            
            <img id="logo-of-main-navbar" src={logo} height="70px" style={{marginTop:"10px"}} />
          </td>
          <td>
            <h2>HomieLancer</h2>
          </td>
        </table>
      </a>
      <div className="links">
        <a id="signup-login-main-nav" href="/login">Log In</a>
        <a id="signup-login-main-nav" href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default NavbarWide;
