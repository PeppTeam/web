import React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import Img from "gatsby-image";
import moment from "moment";
import { Wide, Section, Narrow } from "../components/Layout";
import { H1, P,Intro, Content } from "../components/Typography";
import { Hero } from "../components/Layout/Hero";

const Image  = styled(Img)`
width: auto
margin-bottom: 10rem;

`

const AuthorImage = styled(Img)`
  width: 100px;
  height: 100px;
  background-size: cover;
  display: block;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin-bottom: 1rem;
`;

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost;
  return (
    <Page>
      <Hero>
        <Narrow mb={4}>
          <H1>{post.title}</H1>
          <Intro>
            Tags: {post.tags.map(tag => {
              return <p key={tag}>{tag}</p>;
            })}
          </Intro>
          <Intro> {moment(post.publishDate).format("L")}</Intro>
          <Intro
            dangerouslySetInnerHTML={{
              __html: post.description.childMarkdownRemark.html
            }}
          />
        </Narrow>
      </Hero>
      <Section>
        <Wide>
          <Image
            fluid={post.heroImage.fluid}
          />
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
      <AuthorImage fluid={post.author.image.fluid} />
        <P>{post.author.name}</P>
      </Section>
    </Page>
  );
}

export const blogPostPageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      heroImage {
        fluid(maxWidth: 1024) {
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
          fluid(maxWidth: 1024) {
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
