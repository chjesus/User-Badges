import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";

import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Header />
        <div className="container__info">
          <h1 className="title">Insignias de usuarios</h1>
          <p className="text">Aplicación de reactjs simple</p>
          <p className="text">Crea, lista y edita insignias de</p>
          <p className="text">diferentes usuarios</p>
          <div className="info__btn">
            <Link to="/user-badges/register" className="btn">
              Nuevo Usuario
            </Link>
            <Link to="/user-badges/list" className="btn">
              Listar Usuario
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
