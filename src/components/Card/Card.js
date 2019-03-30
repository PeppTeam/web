import React from "react";
import styled from "styled-components";
import { Box, Flex } from "@rebass/grid";
import { Link } from "gatsby";
import { P, H2 } from "../Typography";
import Img from "gatsby-image";

export const CardLayout = props => (
  <Flex p={[4, 5]} justifyContent="center" alignItems="center" {...props} />
);

const StyledShade = styled(CardLayout)`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.text};
  font-weight: 700;
  font-size: 2em;

  transition: all 0.1s ease-in-out;

  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 12px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(83, 98, 124, 0.07);
  border-image: initial;
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.theme.pop};
    color: ${props => props.theme.white};
  }
`;

const StyledColor = styled(StyledShade)`
  background-color: ${props => props.theme.pop};
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Card = ({ title, slug }) => {
  return (
    <Box width={[1, 1 / 2, 1 / 3]} p={2}>
      <StyledLink to={slug}>
        <StyledShade>{title}</StyledShade>
      </StyledLink>
    </Box>
  );
};

export const ColorCard = ({ title, slug }) => {
  return (
    <Box width={[1, 1 / 2]} p={2}>
      <StyledLink to={slug}>
        <StyledColor>{title}</StyledColor>
      </StyledLink>
    </Box>
  );
};

const StyledContact = styled(StyledShade)`
  font-size: 1em;
  background-color: ${props => props.theme.white};
`;

export const ContactCard = ({ title, mail }) => {
  return (
    <Box width={[1, 1 / 2, null, 1 / 3]} p={[2, 4]}>
      <StyledContact flexDirection="column">
        <H2>{title}</H2>
        <P>{mail}</P>
      </StyledContact>
    </Box>
  );
};

const StyledPerson = styled(CardLayout)`
  background-color: ${props => props.theme.white};
  width: 100%;
`;

const Name = styled.p`
  color: ${props => props.theme.pop};
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  margin: 12px;
`;

const Role = styled.p`
  color: ${props => props.theme.text};
  font-weight: 700;
  margin-bottom: 6px;
  text-align: center;
`;

const Email = styled.p`
  color: ${props => props.theme.meta};
  font-weight: 700;
  font-size: 0.8em;
  text-align: center;
`;

const Image = styled(Img)`
  width: 15rem;
  height: 15rem;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 12px 0px;
`;

export const PersonCard = ({ image, name, role, email }) => {
  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <StyledPerson flexDirection="column">
        {image ? <Image fluid={image.fluid} /> : null}
        <Box justifyContent="center">
          {name ? <Name>{name}</Name> : null}
          {role ? <Role>{role}</Role> : null}
          {email ? <Email>{email}</Email> : email}
        </Box>
      </StyledPerson>
    </Box>
  );
};
