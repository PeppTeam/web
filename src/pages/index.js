import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Page from "../components/Page";

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        allContentfulPartner {
          edges {
            node {
              name
              link
              logo {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulPartner }) => (
      <Page>
        {allContentfulPartner.edges.map(({ node }) => {
          return (
            <a key={node.name} href={node.link}>
              <img src={node.logo.file.url} alt={node.logo.file.fileName} />
            </a>
          );
        })}
      </Page>
    )}
  />
);

export default HomePage;
