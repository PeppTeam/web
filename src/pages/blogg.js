import React from "react";
import { StaticQuery, graphql } from "gatsby";
import moment from "moment";
import Page from "../components/Page";

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
      </Page>
    )}
  />
);

export default BlogPage;
