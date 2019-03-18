import styled from "styled-components";

export const P = styled.p`
  color: ${props => props.theme.text};
  font-family: "Open Sans";
  line-height: 1.4;
  font-size: 1.25em;
  margin-bottom: 10px;
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

export const Content = styled.div`
  & > p {
    color: ${props => props.theme.text};
    font-family: "Open Sans";
    line-height: 1.4;
    font-size: 1.25em;
    margin-bottom: 10px;
    & > strong {
      font-weight: 700;
    }
    & > em {
      font-style: italic;
    }
    & > a {
      color: ${props => props.theme.link};
      font-weight: 700;
      text-decoration: none;
      box-sizing: border-box;
      padding: 2px;

      :hover {
        background-color: ${props => props.theme.link};
        color: white;
        border-radius: 4px;
        padding: 2px;
        display: inline;
      }
      :visited {
        color: ${props => props.theme.link};
      }
    }
  }

  & > ol {
    display: list-item;
    > li {
      color: ${props => props.theme.text};
      font-family: "Open Sans";
      line-height: 1.4;
      font-size: 1.25em;
      list-style-type: decimal;
      margin-left: 20px;
    }
  }

  & img {
    max-width: 100%;
    border-radius: 8px;
  }

  & > ul {
    display: list-item;
    > li {
      color: ${props => props.theme.text};
      font-family: "Open Sans";
      line-height: 1.4;
      font-size: 1.25em;
      list-style-type: disc;
      margin-left: 20px;
    }
  }

  & > blockquote {
    p {
      color: ${props => props.theme.meta};
      font-size: 1.5em;
      margin: 30px;
      font-style: italic;
    }
  }

  & > h2 {
    font-size: 1.5rem;
    color: ${props => props.theme.body};
    font-weight: 900;
    margin-top: 40px;
    margin-bottom: 10px;
  }
  & > h3 {
    font-size: 1.25rem;
    color: ${props => props.theme.yellow};
    font-weight: 900;
  }
`;
