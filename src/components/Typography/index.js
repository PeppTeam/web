import React from "react";
import styled from "styled-components";

export const Meta = styled.p`
  font-size: 0.5em;
  font-weight: 700;
  opacity: 0.5;
`;

export const Content = ({ children }) => {
  return (
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half ">
            <div class="content is-medium">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
