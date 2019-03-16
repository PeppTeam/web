import styled from "styled-components";
import React from "react";
import { Box } from "@rebass/grid";
import { P } from "../Typography";

const Statement = styled(P)`
  font-weight: 700;
`;

const BigStatement = styled(P)`
  font-weight: 700;
  font-size: 2em;
  width: 100%;
`;
const Cite = styled(P)`
  font-size: 1rem;
  color: ${props => props.theme.pop};
`;

export const Quote = ({ statement, cite }) => (
  <Box m={4}>
    <Statement>{statement}</Statement>
    <Cite>{cite}</Cite>
  </Box>
);

export const BigQuote = ({ statement }) => (
  <Box m={4} justifyContent="center" alignItems="center">
    <BigStatement>{statement}</BigStatement>
  </Box>
);
