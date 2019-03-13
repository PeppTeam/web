import React from "react";
import { StaticQuery, graphql } from "gatsby";
import moment from "moment";
import Page from "../components/Page";
import { Section, Wide } from "../components/Layout";
import { H1, P } from "../components/Typography";
import { Hero } from "../components/Layout/Hero";
import { Flex, Box } from "@rebass/grid";
import Img from "gatsby-image";
import styled from "styled-components";

import { Link } from "gatsby";

const Image = styled(Img)`
  margin-bottom: 1rem;
  height: auto;
`;

const BlogPage = () => (
  <StaticQuery
    query={graphql`
      query BlogPage {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              publishDate
              heroImage {
                fluid(maxWidth: 1024) {
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
    render={({ allContentfulBlogPost }) => (
      <Page>
        <Hero>
          <H1>Blogg</H1>
        </Hero>
        <Section>
          <Wide alignItems="center">
            <Flex width="100%" flexWrap="wrap" justifyContent="center">
              {allContentfulBlogPost.edges.map(({ node }) => {
                return (
                  <Box width={[1 / 2]}>
                    <Link to={`blogg/${node.slug}`}>
                      <Image fluid={node.heroImage.fluid} />
                      <P>{node.title}</P>
                    </Link>
                    <P>Created on {moment(node.publishDate).format("L")}</P>{" "}
                  </Box>
                );
              })}
            </Flex>
          </Wide>
        </Section>
      </Page>
    )}
  />
);

export default BlogPage;
