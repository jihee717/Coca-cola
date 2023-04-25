import React from "react";
// import Products from "./Products";
// import bg from "../assets/ai.png"
import { Link } from 'react-router-dom'
import "./new.css";
// import {Flavors, Best, Custom, Explore, Footer} from "../index";
import { Flavors, Best, Custom, Categories, Explore} from "../index";

const New = () => {
  return (
    <div className="home_contaier">
      <div className="bg_wrap">
        <div className="bg">
          <h1 className="title">Taste the Transformation</h1>
          <p>
            Coca-Cola® Creations and Rosalía are celebrating <br /> the real
            magic of music with a new limited edition flavor.
          </p>
          <Link to='/creations'>
          <div className="home_btn">
            <button type="button">EXPLORE</button>
          </div>
          </Link>
        </div>
      </div>
      {/* <Products /> */}
      <div>
        <Flavors />
        <Categories />
        <Best />
        <Custom />
        <Explore />
      </div>
    </div>
  );
};

export default New;
