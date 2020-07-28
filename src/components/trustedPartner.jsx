import React, { Component } from "react";
import "../assets/styles/trusted.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
class TrustedPartner extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div
          class="p-3 mb-2 text-black"
          style={{
            textAlign: "center",
            fontFamily: "Georgia",
            paddingTop: 24,
            fontWeight: "bold",
            // backgroundColor: "#21bf78",
          }}
        >
          TRUSTED PARTNERS
        </div>
        <CardDeck>
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image5.png"
            />
          </Card>
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image4.png"
            />
          </Card>
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image3.png"
            />
          </Card>
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image2.png"
            />
          </Card>
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src="https://raw.githubusercontent.com/solodev/infinite-carousel/master/images/image1.png"
            />
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default TrustedPartner;
