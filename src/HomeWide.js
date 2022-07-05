import NavbarWide from "./navbars/NavbarWide";
import { useEffect, useState } from "react";
import axios from "./axios.js";

import Cookies from "universal-cookie";
import img1 from "./src-images/logo1.jpg";
import img2 from "./src-images/logo2.jpg";
import img3 from "./src-images/logo3.jpg";
import img4 from "./src-images/logo4.png";
import img5 from "./src-images/logo5.png";

import serviceImage from "./src-images/service-logo.png";
const HomeWide = () => {
  const cookies = new Cookies();
  const [accountType, setAccountType] = useState("");

  async function getAccountType() {
    const type = await cookies.getAll().type;
    await setAccountType(type);
  }

  useEffect(() => {
    if (accountType !== "F" || accountType !== "C") {
      getAccountType();
    }

    if (accountType === "F") {
      axios
        .get("freelancer/profile/", { withCredentials: true })
        .then((res) => {
          if (res.data.success === 1) {
            window.location = "/profile/";
          }
        }, []);
    } else if (accountType === "C") {
      axios.get("client/profile/", { withCredentials: true }).then((res) => {
        if (res.data.success === 1) {
          window.location = "/profile/";
        } else {
        }
      }, []);
    }
  }, [accountType]);

  return (
    <div>
      <div className="homewide">
        <div class="homewide-img" id="homewide-img">
          <NavbarWide />
          <br />
          <p id="homewide-img-txt-1">Hire the world-best</p>
          <p id="homewide-img-txt-2">Freelancers</p>
          <p id="homewide-img-txt-3">here, for any job you need.</p>
          <p id="homewide-img-txt-4">
            Tens of users used our HomieLancer website to hire freelancers to
            have their job done. Try it now!
          </p>
          <p> </p>

          <a href="/signup">
            <button id="home-btn-1">Have your job done</button>
          </a>
          <a href="/signup">
            <button id="home-btn-2">Earn money now</button>
          </a>
        </div>

        <div className="homewide-content">
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
                  <img src={img5} height="80" alt="logo" />
                </td>
                <td>
                  <img src={img4} height="80" alt="logo" />
                </td>
              </tr>
            </table>
          </div>
          <hr />
          <hr id="hr2" />

          <div className="need-sth">
            <h2>Need something?</h2>
            <table>
              <tr>
                <td>
                  <h3>Have your job done</h3>
                </td>
                <td>
                  <h3>Earn Money Now</h3>
                </td>
              </tr>

              <tr>
                <td>
                  <p>
                    It’s free and easy to post a job. Simply fill in a title,
                    description and budget and competitive bids come within
                    minutes. We've got freelancers for jobs of any size or
                    budget, across 1800+ skills. No job is too complex. We can
                    get it done!{" "}
                  </p>
                </td>
                <td>
                  <p>
                    You can find any work you can do here. come to us with your
                    talent and show it here through a variety of jobs in many
                    categories. Make your talents pay off through having jobs
                    done and presenting your service here. Have money made
                    easily..{" "}
                  </p>{" "}
                </td>
              </tr>
            </table>
          </div>
          <hr id="hr2" />
          <div className="why-using-us">
            <h2>Why using us?</h2>

            <table>
              <tr>
                <td>
                  <h3>Pay safely</h3>
                </td>
                <td>
                  <h3>Quality work</h3>
                </td>
                <td>
                  <h3>We’re here to help</h3>
                </td>
              </tr>

              <tr>
                <td>
                  <p>
                    Only pay for work when it has been completed and you're 100%
                    satisfied with the quality using our milestone payment
                    system.{" "}
                  </p>
                </td>
                <td>
                  <p>
                    Find professionals you can trust by browsing their samples
                    of previous work and reading their profile reviews.
                    Homielancer have a big bool of proffessionals.{" "}
                  </p>
                </td>
                <td>
                  <p>
                    Our talented team of recruiters can help you find the best
                    freelancer for the job and our technical co-pilots can even
                    manage the project for you.{" "}
                  </p>
                </td>
              </tr>
            </table>
          </div>
          <hr id="hr2" />
          <div className="different-skills">
            <h2>We have different skills and services</h2>
            <div className="feature-table">
              <table>
                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Machine Learning</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Artificial intellegeance</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Web development</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Mobile Apps</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Wordpress</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>copywriting</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>content writing</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Amazon web services</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Marketing</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Windows forms</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Data analysis</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>logo design</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Reserach writing</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>graphic design</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>film montage</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>accounting</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>web scrapping</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>automation</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>android develoment</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Database administration</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Resume Writing</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Game Developer</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Virtual Assistant</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Social Media Management</h3>
                    </td>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        {/* <div class="homewide-footer-img" id="homewide-footer-img">
        
      </div> */}
      </div>

      <div className="homewideMobile">
        <div class="homewide-img" id="homewide-img">
          <NavbarWide />
          <br />
          <p id="homewide-img-txt-1">Hire the world-best</p>
          <p id="homewide-img-txt-2">Freelancers</p>
          <p id="homewide-img-txt-3">here, for any job you need.</p>
          <p id="homewide-img-txt-4">
            Tens of users used our HomieLancer website to hire freelancers to
            have their job done. Try it now!
          </p>
          <table className="btn-table">
            <tr>
              <a href="/signup">
                <button id="home-btn-1">Have your job done</button>
              </a>
            </tr>
            <tr>
              <a href="/signup">
                <button id="home-btn-2">Earn money now</button>
              </a>
            </tr>
          </table>
        </div>

        <div className="homewide-content">
          <div id="trusted-by">
            <p>Trusted by</p>
            <table border="0" cellspacing="0" cellpadding="2">
              <tr>
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
                  <img src={img5} height="80" alt="logo" />
                </td>
                <td>
                  <img src={img4} height="80" alt="logo" />
                </td>
              </tr>
            </table>
          </div>
          <hr />
          <hr id="hr2" />

          <div className="need-sth">
            <h2>Need something?</h2>
            <h3>Have your job done</h3>
            <p>
              It’s free and easy to post a job. Simply fill in a title,
              description and budget and competitive bids come within minutes.
              We've got freelancers for jobs of any size or budget, across 1800+
              skills. No job is too complex. We can get it done!
            </p>
            <h3>Earn Money Now</h3>
            <p>
              You can find any work you can do here. come to us with your talent
              and show it here through a variety of jobs in many categories.
              Make your talents pay off through having jobs done and presenting
              your service here. Have money made easily..{" "}
            </p>{" "}
          </div>
          <hr id="hr2" />
          <div className="why-using-us">
            <h2>Why using us?</h2>

            <h3>Pay safely</h3>
            <p>
              Only pay for work when it has been completed and you're 100%
              satisfied with the quality using our milestone payment system.{" "}
            </p>
            <h3>Quality work</h3>
            <p>
              Find professionals you can trust by browsing their samples of
              previous work and reading their profile reviews. Homielancer have
              a big bool of proffessionals.{" "}
            </p>
            <h3>We’re here to help</h3>
            <p>
              Our talented team of recruiters can help you find the best
              freelancer for the job and our technical co-pilots can even manage
              the project for you.{" "}
            </p>
          </div>
          <hr id="hr2" />
          <div className="different-skills">
            <h2>We have different skills and services</h2>
            <div className="feature-table">
              <table>
                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Machine Learning</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Artificial intellegeance</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Mobile Apps</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Wordpress</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>content writing</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Amazon web services</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Windows forms</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Data analysis</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Reserach writing</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>graphic design</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>accounting</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>web scrapping</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>android develoment</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Database administration</h3>
                    </td>
                  </td>
                </tr>

                <tr>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Game Developer</h3>
                    </td>
                  </td>
                  <td>
                    <td>
                      <img src={serviceImage} />
                    </td>
                    <td>
                      {" "}
                      <h3>Virtual Assistant</h3>
                    </td>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        {/* <div class="homewide-footer-img" id="homewide-footer-img">
        
      </div> */}
      </div>
    </div>
  );
};

export default HomeWide;
