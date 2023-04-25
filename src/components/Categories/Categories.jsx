import React from "react";
import { Link } from 'react-router-dom'
// import { Route, Link } from "react-router-dom";
// import Feature from "../../components/feature/Feature";
import { bottle, apparel, glass, turck, boardgame } from "./import";
import "./categories.css";
// import App2 from "../../App2"

const Categories = () => {
  return (
      <Link to='/shop'>
        <div className="store_section" id="store">
          <li className="store">
            <img src={bottle} />
              Commemorative Bottles
           </li>
          <l className="store">
            <img src={apparel} />
              Apparel
          </l>
          <li className="store">
            <img src={glass} />
              Drinkware
          </li>
          <li className="store">
            <img src={turck} />
              Collectibles
          </li>
          <li className="store">
            <img src={boardgame} />
              Gifts
          </li>
        </div>
      </Link>
  );
};

export default Categories;
