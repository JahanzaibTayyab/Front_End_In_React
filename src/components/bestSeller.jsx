import React from "react";
import "../card/card-style.css";
import Card from "../card/CardUI";
import img1 from "../assets/images/Men1.jpg";
const bestSeller = () => {
  return (
    <div className="container-fluid">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Georgia",
          paddingTop: 16,
        }}
      >
        BEST SELLER
      </h1>
      <Card></Card>
      <Card></Card>
      <button
        type="button"
        class="btn btn-secondary vertical-align: bottom"
        style={{
          marginTop: "30px",
          fontFamily: "Courier New",
          borderRadius: "100px",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 60,
        }}
      >
        SHOP ALL
      </button>
    </div>
  );
};

export default bestSeller;
