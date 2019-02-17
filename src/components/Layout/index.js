import React from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const Masthead = styled.header`
  color: black;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const Section = styled.section`
  color: #333;
  padding: 20px;
  margin: auto;

  & > h1 {
    font-size: 28px;
    font-weight: bold;
  }

  & > small {
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    display: inline-block;
    background: #16799d;
    font-size: 12px;
    margin: 10px 0;
  }

  & > article {
    padding: 40px 30px;

    &::before {
      content: "";
      position: absolute;
      top: -20px;
      right: 0;
      bottom: 0;
      left: 0;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      background: #fff;
      transform: rotate(-2deg);
      z-index: -1;
    }
  }

  & > article > h1 {
    color: #555;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & > article > h2 {
    color: #555;
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & > article > p {
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 15px;
  }

  & > article > img {
    max-width: 100%;
    height: auto;
  }
`;

const Footer = styled.footer`
  color: #aaa;
  padding: 20px 20px 10px;
  font-size: 14px;
  text-align: center;

  & > p {
    margin-bottom: 10px;
  }

  & > p > a {
    color: #169d39;

    &:hover {
      color: #16799d;
    }
  }
`;

function Layout({ children }) {
  injectGlobal`
		${reset}

		body {
			font-family: 'Raleway', Georgia;
			background: aliceblue;
		}
	`;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
          </Helmet>
          <Masthead>{data.site.siteMetadata.title}</Masthead>
          <Section>{children}</Section>
          <Footer>Footer</Footer>
        </>
      )}
    />
  );
}

export default Layout;
