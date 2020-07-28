import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card/cards";
import Navbarr from "./components/navbar";
import Banner from "./components/banner";
import { Button, Alert } from "react-bootstrap";
import Slider from "./components/slider";
import BestSeller from "./components/bestSeller";
import Footer from "./components/footer";
import TrustedPartner from "./components/trustedPartner";
function App() {
  return (
    <div className="container-fluid" style={{ background: "white" }}>
      <Navbarr></Navbarr>
      <Banner></Banner>
      <Slider></Slider>
      <BestSeller></BestSeller>
      <TrustedPartner></TrustedPartner>
      <Footer></Footer>
    </div>
  );
}
export default App;
