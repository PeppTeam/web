import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Page from "../components/Page";
import { Section, Wide } from "../components/Layout";
import { Flex, Box } from "@rebass/grid";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { Tag } from "../components/blog/Tag";

const Image = styled(Img)`
  height: auto;
  border-radius: 8px;
`;

const Card = styled(Link)`
  text-decoration: none;
  font-family: Raleway;
  color: ${props => props.theme.body};
  font-size: 30px;
  font-weight: 900;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

function BlogPage() {
  return (
    <StaticQuery
      query={graphql`
        query BlogPage {
          allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}) {
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
          <Section>
            <Wide alignItems="center">
              <Flex
                width="100%"
                flexWrap="wrap"
                justifyContent="flex-start"
                mx={-3}
              >
                {allContentfulBlogPost.edges.map(({ node }) => {
                  return (
                    <Box width={[1 / 2]} p={3}>
                      <Card to={`blogg/${node.slug}`}>
                        <Image fluid={node.heroImage.fluid} />
                        <Flex flexDirection="row">
                          {node.tags.map(tag => {
                            return (
                              <Tag p={2} ml={0} m={2}>
                                {tag}
                              </Tag>
                            );
                          })}
                        </Flex>

                        <h2>{node.title}</h2>
                      </Card>
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
}
export default BlogPage;
