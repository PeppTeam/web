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

  <nav class="level">
  <p class="level-item has-text-centered">
    <a class="link is-info">Om Pepp</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Join</a>
  </p>
  <p class="level-item has-text-centered">
  <LogoLink to="/">
          <Logo />
        </LogoLink>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Samarbete</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Blogg</a>
  </p>
</nav>
);

export default Header;
