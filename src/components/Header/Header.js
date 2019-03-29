import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import styled from "styled-components";

const LogoLink = styled(Link)`
  width: 4rem;
  height: 4rem;
`;

const Header = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <LogoLink className="navbar-item" to="/">
          <Logo />
        </LogoLink>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="om-pepp">
            Om Pepp
          </Link>
          <Link className="navbar-item" to="ansok">
            Gå med
          </Link>
          <Link className="navbar-item" to="blogg">
            Blogg
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
