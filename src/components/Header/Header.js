import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import styled from "styled-components";
import { Wide } from "../Layout";
import { Flex } from "@rebass/grid";

const LogoLink = styled(Link)`
  width: 80px;
  height: 80px;
  margin: 20px;
`;
const Background = styled.header`
  width: 100vw;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 9999;
`;

const NavLink = styled(Link)`
color: ${props => props.theme.body}
font-family: Raleway;
text-decoration: none;
padding: 0 10px;
font-weight: 700;
z-index: 9999;
opacity: 0.9;

&:visited {
  color: ${props => props.theme.body}
}

&:hover {
  color: ${props => props.theme.text}

}


`;

const Header = () => (
  <Background>
    <Wide>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <div>
          <NavLink to="/om-pepp">Om Pepp</NavLink>
          <NavLink to="/ansok">Vill du vara med?</NavLink>
          <NavLink to="/samarbete">Samarbete</NavLink>
          <NavLink to="/blogg">Blogg</NavLink>
        </div>
      </Flex>
    </Wide>
  </Background>
);

export default Header;
