import React from "react";
import { Link } from 'react-router-dom'
import "./custom.css";
import custom from "../../assets/images/custom.png";

const Custom = () => {
  return (
    <div className="custom section__padding" id="custom">
      <div className="custom-image">
        <img src={custom} />
      </div>
      <div className="custom-content">
        <h4>Coca-Cola Custom</h4>
        <h1>
        Create Memories with Custom Bottles.
        </h1>
        <p>
        Whether you're celebrating a birthday, watching the big game, <br/> or toasting the newlyweds, custom bottles make the occasion special.
        </p>
        <div className="custom-btn">
        <Link to='/shop'>
          <button type="button">SHOP NOW</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom;
