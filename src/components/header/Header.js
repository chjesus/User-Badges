import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="nav-menu">
      <li className="nav-li">
        <Link to="/user-badges" className="nav-li__item">
          Inicio
        </Link>
      </li>
      <li className="nav-li">
        <Link to="/user-badges/register" className="nav-li__item">
          Crear
        </Link>
      </li>
      <li className="nav-li">
        <Link to="/user-badges/list" className="nav-li__item">
          Listar
        </Link>
      </li>
    </nav>
  );
};

export default Header;
