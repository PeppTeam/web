import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const RoundImage = styled(Img)`
  border-radius: 50%;
  margin-bottom: 12px;
`;

export const Person = ({ person }) => {
  return (
    <div className="has-text-centered">
      {person.image ? <RoundImage fluid={person.image.fluid} /> : null}
      <p>
        <strong>{person.name}</strong>
      </p>
      <p>{person.role}</p>
    </div>
  );
};
