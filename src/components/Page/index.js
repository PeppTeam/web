import React from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Header from "../Header/Header";

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
            <Header />
            {children}
            <Footer>Footer</Footer>
          </>
        </ThemeProvider>
      )}
    />
  );
}

export default Page;
