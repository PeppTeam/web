import styled from "styled-components";

import { Link } from "gatsby";

export const LinkCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  text-decoration: none;
  font-family: Raleway;
  font-weight: 700;
  color: white;
  background-color: ${props => props.theme.body};
  border-radius: 4px;

  &:hover {
    font-size: 1.3em;
  }
`;
