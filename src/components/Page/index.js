import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Header from "../Header/Header";

import { Link } from "gatsby";
import favicon from "../../assets/favicon.png";
import "../index.scss";



function Page({ children }) {
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

              <html lang="sv" />
            </Helmet>

           
              <Header />
              {children}

              <footer className="footer">
                <div className="columns has-text-centered">
                  {[
                    { children: "Organisation", to: "/organisation" },
                    { children: "Kontakt", to: "/kontakt" },
                    { children: "Press", to: "/press" },
                    { children: "Dataskydd", to: "/dataskydd" },
                    { children: "Samarbete", to: "/samarbete" },
                    { children: "About Pepp", to: "/about" }
                  ].map(item => {
                    return (
                      <div className="column" key={item.children}>
                        <Link
                          className="is-uppercase	has-text-weight-semibold"
                          {...item}
                        />
                      </div>
                    );
                  })}
                </div>
              </footer>
          </>
        </ThemeProvider>
      )}
    />
  );
}

export default Page;
