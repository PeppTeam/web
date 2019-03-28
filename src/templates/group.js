import React from "react";
import Page from "../components/Page";
import Img from "gatsby-image";
import { Person } from "../components/Card/Person";
import styled from "styled-components";

const FeaturedImage = styled(Img)`
  filter: grayscale(100%) brightness(120%);
  border-radius:4px;
`;

export default function Group({ data }) {
  const group = data.contentfulGroup;
  return (
    <Page>
      <section class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container">
          
            <div className="columns">
              <div className="column is-half">
                <h1 class="title"> {group.title}</h1>
                <p
                  class="subtitle"
                  dangerouslySetInnerHTML={{
                    __html: group.intro.childMarkdownRemark.html
                  }}
                />
              </div>
              <div className="column is-half">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">

        <div class="container">

          <div class="columns is-centered">
            <div class="column is-half ">
            <FeaturedImage fluid={group.featuredImage.fluid} />

              <div
                class="content"
                dangerouslySetInnerHTML={{
                  __html: group.body.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div class="columns is-multiline is-8 is-variable">
            {group.persons.map(person => {
              return (
                <div class="column is-3 has-text-centered">
                  <Person person={person} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Page>
  );
}

export const groupPageQuery = graphql`
  query GroupPageBySlug($slug: String!) {
    contentfulGroup(slug: { eq: $slug }) {
      title
      featuredImage {
        fluid(maxWidth: 2048) {
          ...GatsbyContentfulFluid
        }
      }

      intro {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      persons {
        name
        role
        education
        image {
          fluid(maxWidth: 1024, maxHeight: 1024) {
            src
            srcSet
            sizes
            aspectRatio
          }
        }
      }
    }
  }
`;
