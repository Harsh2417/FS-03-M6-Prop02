import React from "react";
import "./Card.css";


function Cards({ name, head, images }) {
  return (
    <div className="main">
      <div className="left-container">
          <div className="sub-left">
            <img src={images} alt="movie-banner " className="sub-left" />
          </div>
          <div className="sub-right">
            <p style={{color:"black", fontSize:"15px"}}>{name}</p>
            <h3 style={{color:"black",fontSize:"25px"}}>{head}</h3>
          </div>
        <div className="lower">
          <p>
           Set in a world where fantasy creatures live side by side with humans. A human cop is forced
           to work with an Orc to find a weapon everyone is preparedto kill for.
          </p>
        </div>
    
      </div>

      <div className="right-container-movie-banner">
        <img src={images} alt="movie-banner" className="movie-banner" />
      </div>
    </div>
  );
}

export default Cards;