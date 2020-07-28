import React from "react";
import mainImg from "../assets/images/banner_1_1400x400.jpg";
import img1 from "../assets/images/Women_1_200x200.png";
const Slider = () => {
  return (
    <div className="container-fluid">
      <div
        //   style={{ }}
        style={{
          height: "400px",

          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${mainImg})`,
        }}
      >
        <div
          class="text-white"
          style={{
            paddingTop: "60px",
            fontFamily: "Georgia",
            fontSize: "0",
          }}
        >
          <span
            style={{
              fontSize: "60px",
              paddingBottom: "0px",
            }}
          >
            MEN'S <br />
          </span>
          <span
            style={{
              fontSize: "40px",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            SHOES <br />
          </span>
          <span
            style={{
              fontSize: "50px",
              fontFamily: "Courier New",
              opacity: "0.7",
              paddingTop: "0px",
            }}
          >
            COLLECTION <br />
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "Courier New",
              opacity: "0.7",
            }}
          >
            New trending shoes
            <br />
          </span>
          <button
            type="button"
            class="btn btn-secondary vertical-align: bottom"
            style={{
              marginTop: "30px",
              fontFamily: "Courier New",
              borderRadius: "100px",
            }}
          >
            SHOP COLLECTION
          </button>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <div className="overflow">
            <img src={mainImg} alt="Image 1" className="card-img-top" />
          </div>
          <div class="card-body">
            <h4
              class="card-title"
              style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >
              Shop Men's Collection
            </h4>
          </div>
        </div>
        <div class="card">
          <div className="overflow">
            <img src={mainImg} alt="Image 1" className="card-img-top" />
          </div>
          <div class="card-body">
            <h4
              class="card-title"
              style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >
              Shop Men's Collection
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
