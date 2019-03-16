import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Flex } from "@rebass/grid";
import Page from "../components/Page";
import { Section, Narrow, Wide } from "../components/Layout";
import { H1, P, H2 } from "../components/Typography";
import { Hero } from "../components/Layout/Hero";
import { PersonCard } from "../components/Card/Card";

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
                  fluid(maxWidth: 1024) {
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
        <Hero>
          <H1>Organisation</H1>
        </Hero>
        <Section>
          {allContentfulOrganisation.edges.map(({ node }) => {
            return (
              <>
                <Narrow mb={3}>
                  <Flex mb={4} flexDirection="column">
                    <H2>{node.title}</H2>
                    <P
                      dangerouslySetInnerHTML={{
                        __html: node.text.childMarkdownRemark.html
                      }}
                    />
                  </Flex>
                </Narrow>
                <Wide>
                  <Flex
                    flexWrap="wrap"
                    width="100%"
                    alignItems="flex-start"
                    m={-2}
                    justifyContent="stretch"
                  >
                    {node.persons.map(person => {
                      return (
                        <PersonCard
                          name={person.name}
                          role={person.role}
                          image={person.image}
                          email={person.email}
                        />
                      );
                    })}
                  </Flex>
                </Wide>
              </>
            );
          })}
        </Section>
      </Page>
    )}
  />
);

export default ContactPage;
