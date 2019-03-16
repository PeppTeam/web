import React from "react";
import styled from "styled-components";
import { Box } from "@rebass/grid";
import { Link } from "gatsby";

export const CardLayout = props => (
  <Box
    p={[4, 5]}
    justifyContent="center"
    alignItems="center"
    {...props}
    css={{}}
  />
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
