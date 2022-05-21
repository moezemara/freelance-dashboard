import logo from "./src-images/homie-logo-1.png";

const NavbarWide = () => {
  return (
    <nav className="navbarwide">
      <a href="/">
        <table id="table-of-home-logo">
          <td>
            <img src={logo} height="70px" style={{marginTop:"10px"}} />
          </td>
          <td>
            <h2>HomieLancer</h2>
          </td>
        </table>
      </a>
      <div className="links">
        <a href="/login">Log In</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default NavbarWide;
