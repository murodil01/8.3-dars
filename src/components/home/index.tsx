import Cards from "../cards";
import Data from "../data";
import Feature from "../features";
import Footer from "../footer";
import Inform from "../inform";
import Navbar from "../navbar";

const HomeComponent = () => {
  return <div>
    <Navbar/>
    <Data/>
    <Inform/>
    <Cards/>
    <Feature/>
    <Footer/>
  </div>;
};

export default HomeComponent;
