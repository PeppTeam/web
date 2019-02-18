import styled from "styled-components";
import React from "react";
import { Narrow } from "../Layout";

export const BigQuote = styled.blockquote`
  color: ${props => props.theme.body};
  font-size: 2em;
  font-weight: 800;
  line-height: 1.4em;
  max-width: 15em;
  margin: 0 auto;
  padding: 2em 0;
`;

export const StyledQuote = styled.blockquote`
  font-size: 1em;
  font-weight: 800;
  line-height: 1.4em;
  margin: 4em 0;
  padding: 4em 0;
`;

const QuoteText = styled.span`
  color: ${props => props.theme.body};
  opacity: 0.9;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.4em;
`;

const SaidBy = styled.p`
  color: ${props => props.theme.text};
  font-size: 1em;
  font-weight: 700;
  line-height: 1.4em;
  max-width: 30em;
  margin: 0 auto;
  padding: 2em 0;
`;

export const Quote = ({ quote, saidBy }) => (
  <StyledQuote>
    <Narrow>
      <QuoteText>{quote}</QuoteText>
      <SaidBy>- {saidBy}</SaidBy>
    </Narrow>
  </StyledQuote>
);
