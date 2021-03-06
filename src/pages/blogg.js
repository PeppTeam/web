import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Page from "../components/Page";

import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

const Image = styled(Img)`
  height: auto;
  border-radius: 8px;
`;



function BlogPage() {
  return (
    <StaticQuery
      query={graphql`
        query BlogPage {
          allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
            edges {
              node {
                title
                slug
                publishDate
                tags
                heroImage {
                  fluid(maxWidth: 800, maxHeight: 600) {
                    src
                    srcSet
                    sizes
                    aspectRatio
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
      render={({ allContentfulBlogPost, props }) => (
        <Page>
          <section className="section">
            <div className="container">
              <div className="columns is-multiline">
                {allContentfulBlogPost.edges.map(({ node }) => {
                  return (
                    <div className="column is-one-third">
                      <Link to={`blogg/${node.slug}`}>
                        <Image fluid={node.heroImage.fluid} />

                        {node.tags.map(tag => {
                          return <span class="tag is-primary">{tag}</span>;
                        })}

                        <h2 class="title is-4">{node.title}</h2>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </Page>
      )}
    />
  );
}
export default BlogPage;
