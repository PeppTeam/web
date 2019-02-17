import React from "react";
import Page from "../components/Page";
// import { H1, H2, P, Intro } from "../components/typography";
// import { Hero } from "../components/layout/Hero";
// import { Narrow } from "../components/layout";
import styled from "styled-components";
// import { Grid, GridItem } from "styled-grid-responsive";
import Img from "gatsby-image";
import moment from "moment";

const Image = styled(Img)`
  width: 20rem;
  height: 20rem;
  background-size: cover;
  display: block;
`;

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost;
  return (
    <Page>
      <h1>{post.title}</h1>
      {post.tags.map(tag => {
        return <p key={tag}>{tag}</p>;
      })}
      <p> {moment(post.publishDate).format("L")}</p>

      <div
        dangerouslySetInnerHTML={{
          __html: post.description.childMarkdownRemark.html
        }}
      />
      <Image fluid={post.heroImage.fluid} />
      <div
        dangerouslySetInnerHTML={{
          __html: post.body.childMarkdownRemark.html
        }}
      />
      <div>
        <Image fluid={post.author.image.fluid} />

        <h2>{post.author.name}</h2>
      </div>
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
        title
        image {
          fluid(maxWidth: 1024) {
            src
          }
        }
      }
      publishDate
      tags
    }
  }
`;
