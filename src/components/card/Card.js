import React from "react";

import "./Card.scss";

const Card = props => {
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__body--title">
          <img src={props.avatar} alt="" />
          <h1>
            {props.firstName} {props.lastName}
          </h1>
        </div>
        <div className="card__body--info">
          <p>{props.jobtitle}</p>
          <p>{props.email}</p>
        </div>
      </div>
      <div className="card__footer">#BadgeUser</div>
    </div>
  );
};

export default Card;
