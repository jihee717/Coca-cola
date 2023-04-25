import React from "react";
import zerocoke from "../../assets/images/zerocoke.png";
import "./best.css";

const Best = () => {
    return (
      <div className="best-container" id="best">
        <div className="best">
          <img src={zerocoke}/>
        </div>
      </div>
    );
  };
  
export default Best;
