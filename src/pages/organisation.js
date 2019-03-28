import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Page from "../components/Page";
import {  Content } from "../components/Typography";
import { Person } from "../components/Card/Person";
import { Hero } from "../components/Layout/Hero";

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query OrgPage {
        allContentfulOrganisation {
          edges {
            node {
              title
              text {
                childMarkdownRemark {
                  html
                }
              }
              persons {
                name
                role
                email
                shortBio {
                  childMarkdownRemark {
                    html
                  }
                }
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
        }
      }
    `}
    render={({ allContentfulOrganisation }) => (
      <Page>
        <Hero title="Organisation" />

          {allContentfulOrganisation.edges.map(({ node }) => {
            return (
              <>
                      <Content>

                <h2>{node.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.text.childMarkdownRemark.html
                  }}
                />
                </Content>
                <div className="container">
                  <div class="columns is-multiline is-8 is-variable">
                    {node.persons.map(person => {
                      return (
                        <div class="column is-3 has-text-centered">
                          <Person person={person} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
      </Page>
    )}
  />
);

export default ContactPage;
