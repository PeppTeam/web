import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";

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
      <Layout>
        {allContentfulPartner.edges.map(({ node }) => {
          return (
            <a key={node.name} href={node.link}>
              <img src={node.logo.file.url} alt={node.logo.file.fileName} />
            </a>
          );
        })}
      </Layout>
    )}
  />
);

export default HomePage;
