import React from "react";
import { StaticQuery, graphql } from "gatsby";
import moment from "moment";
import Page from "../components/Page";
import { Section } from "../components/Layout";
import { H1 } from "../components/Typography";
import { Hero } from "../components/Layout/Hero";
const BlogPage = () => (
  <StaticQuery
    query={graphql`
      query BlogPage {
        allContentfulBlogPost {
          edges {
            node {
              title
              publishDate
              heroImage {
                file {
                  url
                }
              }
              body {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulBlogPost }) => (
      <Page>
        <Hero>
          <H1>Blogg</H1>
        </Hero>
        <Section>
          {allContentfulBlogPost.edges.map(({ node }) => {
            return (
              <div>
                <p>Created on {moment(node.publishDate).format("L")}</p>
                <img
                  src={node.heroImage.file.url}
                  alt={node.heroImage.file.fileName}
                />
              </div>
            );
          })}
        </Section>
      </Page>
    )}
  />
);

export default BlogPage;
