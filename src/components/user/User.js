import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class user extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = id => {
    this.props.deleteUser(id);
  };

  render() {
    return this.props.badges.map(element => {
      return (
        <li className="card__item" key={element.id}>
          <div className="card__item--img">
            <img src={element.avatar} alt="avatar por defecto" />
          </div>
          <div className="card__item--info">
            <h1>
              {element.firstName} {element.lastName}
            </h1>
            <p>{element.jobTitle}</p>
            <span>{element.email}</span>
          </div>
          <div className="card__item--btns">
            <Link to={`/user-badges/edit/${element.id}`} className="btn">
              Editar
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => this.handleClick(element.id)}
            >
              Eliminar
            </button>
          </div>
        </li>
      );
    });
  }
}
