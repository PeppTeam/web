import React from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Header from "../Header/Header";
import { Flex, Box } from "@rebass/grid";
import { Section, Narrow } from "../Layout";
import { Link } from "gatsby";
import favicon from "../../assets/favicon.png";
import '../index.scss'

const Footer = styled.footer`
  text-align: center;
`;

const NavLink = styled(Link)`
color:${props => props.theme.text};
font-family: Raleway;
text-decoration: none;
padding: 0 10px;
font-weight: 700;


&:hover {
  color:${props => props.theme.pop};

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
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content:
                    "Vi skapar nya förebilder och breddar synen på teknik"
                },
                {
                  name: "keywords",
                  content: "engineering, mentoring, tech, sweden, stem"
                }
              ]}
              link={[
                { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
              ]}
            >
              <meta charSet="utf-8" />
              <title>Pepp</title>

              <html lang="en" />
            </Helmet>
            <Header />
            {children}
            <Footer>
              <Section
                justifyContent="center"
                css={{
                  minHeight: "20vh"
                }}
              >
                <Narrow>
                  <Flex flexWrap="wrap">
                    {[
                      { children: "Organisation", to: "/organisation" },
                      { children: "Kontakt", to: "/kontakt" },
                      { children: "Press", to: "/press" },
                      { children: "Dataskydd", to: "/dataskydd" },
                      { children: "Samarbete", to: "/samarbete" },
                      { children: "About Pepp", to: "/about" }
                    ].map(item => {
                      return (
                        <Box width={[1 / 3, 1 / 6]}>
                          <NavLink {...item} />
                        </Box>
                      );
                    })}
                  </Flex>
                </Narrow>
              </Section>
            </Footer>
          </>
        </ThemeProvider>
      )}
    />
  );
}

export default Page;
