import React from "react";
import Navbar from "react-bootstrap/Navbar";
const Navbarr = (props) => {
  return (
    <div className="container">
      <nav class="navbar navbar-light">
        <a
          class="navbar-brand"
          href="#!"
          style={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: 30,
            paddingRight: 90,
          }}
        >
          Footware
        </a>
        <form class="form-inline">
          <input
            style={{ borderRadius: "100rem" }}
            class="form-control mr-sm-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          <div
            class=" p-2 mb-0 "
            style={{
              borderRadius: "100px",
              backgroundColor: "#21bf78",
              height: "40px",
              width: "40px",
            }}
          >
            {" "}
            <i
              class="fa fa-search fa-1x "
              style={{ color: "white", paddingRight: 10 }}
            ></i>{" "}
          </div>
        </form>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div
          class="collapse navbar-collapse"
          id="navbarTogglerDemo02"
          style={{ fontFamily: "Georgia" }}
        >
          <ul class="navbar-nav mr-auto mt-2 mt-md-0">
            <li class="nav-item active">
              <a class="nav-link" href="#!">
                HOME <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                MEN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                WOMEN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div class="float-right">
          {" "}
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <span> CART({props.Value})</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbarr;
