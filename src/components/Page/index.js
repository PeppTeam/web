import React from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const Masthead = styled.header`
  color: black;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const Content = styled.section`
  margin: auto;

  & > h1 {
    font-size: 28px;
    font-weight: bold;
  }
`;

const Footer = styled.footer`
  text-align: center;
`;

function Page({ children }) {
  injectGlobal`
		${reset}

		body {
			font-family: 'Raleway', Georgia;
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
        <ThemeProvider theme={theme}>
          <>
            <Helmet title={data.site.siteMetadata.title}>
              <html lang="en" />
            </Helmet>
            <Masthead>{data.site.siteMetadata.title}</Masthead>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
          </>
        </ThemeProvider>
      )}
    />
  );
}

export default Page;
