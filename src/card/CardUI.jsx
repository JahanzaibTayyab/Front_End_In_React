import React from "react";
import "./card-style.css";
import img1 from "../assets/images/Men1.jpg";
import img2 from "../assets/images/men2.jpg";
import img3 from "../assets/images/Men3.jpg";
import img4 from "../assets/images/Men4.jpg";
const Card = (props) => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-sm"
          style={{ marginLeft: "30px", paddingRight: "30px" }}
        >
          <div class="card" style={{ width: 18 + "rem" }}>
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>
                {" "}
                <p class="card-text" style={{ textAlign: "center" }}>
                  MEN FORMAL LEATHER SHOES <br /> Pk Brand <br /> Price: 99$
                </p>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div
          class="col-sm"
          style={{ marginLeft: "30px", paddingRight: "30px" }}
        >
          <div class="card" style={{ width: 18 + "rem" }}>
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>
                {" "}
                <p class="card-text" style={{ textAlign: "center" }}>
                  MEN FORMAL LEATHER SHOES <br /> Pk Brand <br /> Price: 99$
                </p>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div
          class="col-sm"
          style={{ marginLeft: "30px", paddingRight: "30px" }}
        >
          <div class="card" style={{ width: 18 + "rem" }}>
            <img src={img4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>
                {" "}
                <p class="card-text" style={{ textAlign: "center" }}>
                  MEN FORMAL LEATHER SHOES <br /> Pk Brand <br /> Price: 99$
                </p>
              </h4>
            </div>
          </div>
        </div>
        <div
          class="col-sm"
          style={{ marginLeft: "30px", paddingRight: "30px" }}
        >
          <div class="card" style={{ width: 18 + "rem" }}>
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>
                <p class="card-text" style={{ textAlign: "center" }}>
                  MEN FORMAL LEATHER SHOES <br /> Pk Brand <br /> Price: 99$
                </p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
