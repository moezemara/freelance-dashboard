import img1 from './src-images/logo1.jpg'
import img2 from './src-images/logo2.jpg'
import img3 from './src-images/logo3.jpg'
import img4 from './src-images/logo4.png'

const Home = () => {
    return (  
        <div className="home">
        <div id="home-img">
            <p> <br /><br /></p>
            <p id="home-img-txt-1">Hire the world-best</p>
            <p id="home-img-txt-2">Freelancers</p>
            <p id="home-img-txt-3">here, for any job you need.</p>
            <p id="home-img-txt-4">Tens of users used our FreeLanco website to hire freelancers to have their job done. Try it now!</p>
            <p> </p>

            <a href="/signup"><button id="home-btn-1" >Have your job done</button></a>
            <a href="/signup"><button id="home-btn-2">Earn money now</button></a>

        </div>

<hr />
<div id="trusted-by">

<table border="0" cellspacing="0" cellpadding="2">
    <tr>
<td><p>Trusted by</p></td>
<td><img src={img1}  height="80" alt="logo" /></td>
<td><img src={img2}  height="80" alt="logo" /></td>
<td><img src={img3}  height="80" alt="logo" /></td>
<td><img src={img4}  height="80" alt="logo" /></td>
</tr></table>
</div>
<hr />

            <div className="need-sth">
                <h2>Need something?</h2>
            </div>

            <div className="why-using-us">
                <h2>Why using us?</h2>
            </div>

            <div className="different-skills">
                <h2>We have different skills and services</h2>
            </div>

        </div>

    );
}
 
export default Home;
