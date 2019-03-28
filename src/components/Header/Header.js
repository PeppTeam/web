import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import styled from "styled-components";



const Header = () => (
  <nav className="navbar">
  <div className="container">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <Logo />
      </Link>
    </div>

    <div  className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <Link className="navbar-item" to="om-pepp">
            Om Pepp
          </Link>
        </div>
      </div></div>
    </div>
  </nav>
);

export default Header;
