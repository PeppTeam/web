import React from "react";
import styled from "styled-components";

export const P = styled.p`
  color: ${props => props.theme.text};
  font-family: "Open Sans";
  line-height: 1.4;
  font-size: 1.25em;
  margin-bottom: 16px;
`;

export const Intro = styled(P)`
  font-weight: 700;
  color: ${props => (props.white ? props.theme.white : props.theme.text)};
`;

export const Meta = styled.p`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.6em;
  color: ${props => props.theme.meta};
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: ${props => (props.white ? props.theme.white : props.theme.body)};
  font-weight: 700;
  text-align: ${props => (props.center ? "center" : "left")};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.body};
  font-weight: 700;
`;
export const H3 = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.body};
  font-weight: 700;
`;

export const Content = ({ children }) => {
  return (
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half ">
            <div class="content">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
