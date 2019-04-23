import React from "react";
import Page from "../components/Page";
import Img from "gatsby-image";
import { Person } from "../components/Card/Person";
import styled from "styled-components";

const FeaturedImage = styled(Img)`
  border-radius: 4px;
`;

export default function Group({ data }) {
  const group = data.contentfulGroup;
  return (
    <Page>
      <section className="section">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half ">
                <h1 className="title"> {group.title}</h1>
                <p
                  className="subtitle"
                  dangerouslySetInnerHTML={{
                    __html: group.intro.childMarkdownRemark.html
                  }}
                />
                <FeaturedImage fluid={group.featuredImage.fluid} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half ">
              <div
                className="content"
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
          <div className="columns is-multiline is-8 is-variable">
            {group.persons.map(person => {
              return (
                <div
                  className="column is-2 has-text-centered"
                  key={person.name}
                >
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
