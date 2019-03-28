import React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import Img from "gatsby-image";
import moment from "moment";
import {Person} from '../components/Card/Person'



const Image = styled(Img)`
width: auto
margin-bottom: 10rem;
border-radius: 8px;
`;

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost;
  return (
    <Page>
      <section class="hero">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                {post.tags.map(tag => {
                  return <span class="tag is-primary">{tag}</span>;
                })}
                <h1 class="title">{post.title}</h1>
                <h2 class="subtitle">
                  {moment(post.publishDate).format("LL", "fr")}
                </h2>
                <p
                  class="has-text-weight-semibold"
                  dangerouslySetInnerHTML={{
                    __html: post.description.childMarkdownRemark.html
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <Image fluid={post.heroImage.fluid} />
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half ">
              <div
                class="content"
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-one-quarter">
            <Person person={post.author}/>
              
            </div>
          </div>
        </div>
      </section>
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
          fluid(maxWidth: 1024, maxHeight: 1024) {
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
