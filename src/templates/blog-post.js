import React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import Img from "gatsby-image";
import moment from "moment";
import { Wide, Section, Narrow } from "../components/Layout";
import { H1, Intro, Content } from "../components/Typography";
import { Hero } from "../components/Layout/Hero";
import { Tag } from "../components/blog/Tag";
import { Flex, Box } from "@rebass/grid";
import { PersonCard } from "../components/Card/Card";

const Image = styled(Img)`
width: auto
margin-bottom: 10rem;
border-radius: 8px;
`;

const Date = styled.p`
  color: ${props => props.theme.text};
  opacity: 0.6;
  text-align: center;
`;

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost;
  return (
    <Page>
      <Hero>
        <Narrow mb={4} alignItems="center">
          <Box mb={4} alignItems="center">
            <Flex flexDirection="row" width="100%" justifyContent="center">
              {post.tags.map(tag => {
                return (
                  <Tag p={2} ml={0} m={2}>
                    {tag}
                  </Tag>
                );
              })}
            </Flex>
            <Box mb={3}>
              <H1 center>{post.title}</H1>
            </Box>
            <Date> {moment(post.publishDate).format("LL", "fr")}</Date>
          </Box>
          <Intro
            dangerouslySetInnerHTML={{
              __html: post.description.childMarkdownRemark.html
            }}
          />
        </Narrow>
      </Hero>
      <Section>
        <Wide>
          <Image fluid={post.heroImage.fluid} />
        </Wide>
      </Section>
      <Section>
        <Narrow>
          <Content
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html
            }}
          />
        </Narrow>
      </Section>
      <Section>
        <PersonCard image={post.author.image} name={post.author.name} />
      </Section>
    </Page>
  );
}

export const blogPostPageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      heroImage {
        fluid(maxWidth: 1200, maxHeight: 800) {
          src
          srcSet
          sizes
          aspectRatio
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        role
        image {
          fluid {
            src
            srcSet
            sizes
            aspectRatio
          }
        }
      }
      publishDate
      tags
    }
  }
`;
