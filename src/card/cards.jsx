import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../assets/images/Men1.jpg";
class Cards extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
            <Card imgsrc={img1} title=" MEN FORMAL LEATHER SHOES"></Card>
          </div>
          <div className="col-md-3">
            <Card imgsrc={img1} title="SP17-BSE-163"></Card>
          </div>
          <div className="col-md-3">
            <Card imgsrc={img1} title="SP17-BSE-163"></Card>
          </div>
          <div className="col-md-3">
            <Card imgsrc={img1} title="SP17-BSE-163"></Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
