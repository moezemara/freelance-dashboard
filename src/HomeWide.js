import NavbarWide from "./NavbarWide";
import img1 from "./src-images/logo1.jpg";
import img2 from "./src-images/logo2.jpg";
import img3 from "./src-images/logo3.jpg";
import img4 from "./src-images/logo4.png";
import serviceImage from './src-images/service-logo.png';
const HomeWide = () => {
  return (
    <div className="homewide">
      
      <div class="homewide-img" id="homewide-img">
      <NavbarWide/>
        <p>
          {" "}
          <br />
          <br />
        </p>
        <p id="homewide-img-txt-1">Hire the world-best</p>
        <p id="homewide-img-txt-2">Freelancers</p>
        <p id="homewide-img-txt-3">here, for any job you need.</p>
        <p id="homewide-img-txt-4">
          Tens of users used our HomieLancer website to hire freelancers to have
          their job done. Try it now!
        </p>
        <p> </p>

        <a href="/signup">
          <button id="home-btn-1">Have your job done</button>
        </a>
        <a href="/signup">
          <button id="home-btn-2">Earn money now</button>
        </a>
        
      </div>
<hr />
      <div id="trusted-by">
        <table border="0" cellspacing="0" cellpadding="2">
          <tr>
            <td>
              <p>Trusted by</p>
            </td>
            <td>
              <img src={img1} height="80" alt="logo" />
            </td>
            <td>
              <img src={img2} height="80" alt="logo" />
            </td>
            <td>
              <img src={img3} height="80" alt="logo" />
            </td>
            <td>
              <img src={img4} height="80" alt="logo" />
            </td>
          </tr>
        </table>
      </div>
      <hr />

      <div className="need-sth">
        <h2>Need something?</h2>
        <table>
          <tr>
            <td>
              <h3>Post a job</h3>
            </td>
            <td>
              <h3>Post a job</h3>
            </td>
          </tr>

          <tr>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                provident perferendis repudiandae enim odio, aut, necessitatibus
                vel quo quidem placeat eligendi amet cumque.{" "}
              </p>
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                provident perferendis repudiandae enim odio, aut, necessitatibus
                vel quo quidem placeat eligendi amet cumque.{" "}
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div className="why-using-us">
        <h2>Why using us?</h2>

        <table>
          <tr>
            <td>
              <h3>Feature</h3>
            </td>
            <td>
              <h3>Feature</h3>
            </td>
            <td>
              <h3>Feature</h3>
            </td>
          </tr>

          <tr>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                provident perferendis repudiandae enim odio, aut, necessitatibus
                vel quo quidem placeat eligendi amet cumque.{" "}
              </p>
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                provident perferendis repudiandae enim odio, aut, necessitatibus
                vel quo quidem placeat eligendi amet cumque.{" "}
              </p>
            </td>
            <td>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                provident perferendis repudiandae enim odio, aut, necessitatibus
                vel quo quidem placeat eligendi amet cumque.{" "}
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div className="different-skills">
        <h2>We have different skills and services</h2>

        <table>
          <tr>
            <td>
              <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
          </tr>

          <tr>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
          </tr>

          <tr>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
          </tr>

          <tr>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
            <td>
             <td><img src={serviceImage} /></td><td> <h3>Feature</h3></td>
            </td>
          </tr>
        </table>
      </div>


    </div>
  );
};

export default HomeWide;
