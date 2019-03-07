import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import styled from "styled-components";
import { Wide } from "../Layout";

const LogoLink = styled(Link)`
  width: 100px;
  height: 100px;
  margin: 20px;
`;
const Background = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NavLink = styled(Link)`
color: white;
font-family: Raleway;
text-decoration: none;
padding: 0 10px;
font-weight: 700;
z-index: 9999;
opacity: 0.9;

&:hover {
  opacity: 0.8
`;

const Header = () => (
  <Background>
    <Wide>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <div>
          <NavLink to="/om-pepp">Om Pepp</NavLink>
          <NavLink to="/ansok">Vill du vara med?</NavLink>
          <NavLink to="/samarbete">Samarbete</NavLink>
        </div>
      </div>
    </Wide>
  </Background>
);

export default Header;
