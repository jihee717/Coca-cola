import React from "react";
import { Link } from 'react-router-dom'
import "./flavors.css";
import Flavor from "../../assets/images/flavors.png";

const Flavors = () => {
  return (
    <Link to='/shop'>
    <div className="flavors" id="flavor">
        <img src={Flavor} alt="flavors" />
    </div>
    </Link>
  );
};

export default Flavors;
