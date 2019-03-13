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
  background-color: ${props => props.theme.pop};
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 3rem;
  &:hover {
    font-size: 3.2em;
  }
`;

export const PurpleLinkCard = styled(LinkCard)`
  background-color: ${props => props.theme.purple};
`;

export const BlueLinkCard = styled(LinkCard)`
  background-color: ${props => props.theme.blue};
`;
