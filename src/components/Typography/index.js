import styled from "styled-components";

export const Intro = styled.p`
  font-size: 1.4em;
  line-height: 1.5em;
  max-width: 800px;
  opacity: 0.9;
  color: ${props => props.theme.white};
`;

export const P = styled.p`
  color: ${props => props.theme.text};
  font-family: "Open Sans";
  line-height: 1.5;
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const Meta = styled.p`
  font-size: 0.6em;
  font-weight: 900;
  line-height: 1.6em;
  color: ${props => props.theme.meta};
  text-transform: uppercase;
`;

export const H1 = styled.h1`
  font-size: 3em;
  color: ${props => props.theme.white};
  font-weight: 900;
  margin-bottom: 30px;
`;
export const H2 = styled.h2`
  font-size: 2.25em;
  color: ${props => props.theme.body};
  font-weight: 900;
`;
export const H3 = styled.h3`
  font-size: 1.5em;
  color: ${props => props.theme.body};
  font-weight: 900;
`;

export const Content = styled.div`
  & > p {
    color: ${props => props.theme.text};
    font-family: "Open Sans";
    line-height: 1.5;
    font-size: 1.2em;
    margin-bottom: 10px;
    & > strong {
      font-weight: 700;
      font-family: "Open Sans";
    }
    & > a {
      color: ${props => props.theme.link};
      font-family: "Open Sans";
      font-weight: 700;
      text-decoration: none;
      :hover {
        opacity: 0.8;
      }
    }
  }
  & > h2 {
    font-size: 2.25em;
    color: ${props => props.theme.body};
    font-weight: 900;
    margin-top: 40px;
    margin-bottom: 10px;
  }
  & > h3 {
    font-size: 1.5em;
    color: ${props => props.theme.yellow};
    font-weight: 900;
  }
`;