import React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import Img from "gatsby-image";
import moment from "moment";
import { Wide, Center, Narrow } from "../components/Layout";
import { H1, Intro, Content } from "../components/Typography";

const Image = styled(Img)`
  width: auto;
  height: 600px;
  margin: 50px;
`;

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost;
  return (
    <Page>
      <Narrow>
        <Center>
          <H1>{post.title}</H1>
          <div>
            {post.tags.map(tag => {
              return <p key={tag}>{tag}</p>;
            })}
          </div>

          <p> {moment(post.publishDate).format("L")}</p>
        </Center>
      </Narrow>
      <Wide>
        <Image fluid={post.heroImage.fluid} />
      </Wide>
      <Narrow>
        <Intro
          dangerouslySetInnerHTML={{
            __html: post.description.childMarkdownRemark.html
          }}
        />
        <Content
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html
          }}
        />
        <div>
          <Image fluid={post.author.image.fluid} />

          <h2>{post.author.name}</h2>
        </div>
      </Narrow>
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
        title
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
