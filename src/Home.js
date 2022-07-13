import img1 from "./src-images/logo1.jpg";
import img2 from "./src-images/logo2.jpg";
import img3 from "./src-images/logo3.jpg";
import img4 from "./src-images/logo4.png";
import serviceImage from './src-images/service-logo.png';
const Home = () => {


var list = ['hello1','hello2','hello3','hello4']


  return (
    <div>
<h1>This is a temporary test page</h1>

{

list.map(item =>(
  <div>
  <h2>item</h2>
  </div>
))

}

    </div>
  );
};

export default Home;
