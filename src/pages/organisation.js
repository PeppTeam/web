import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Flex } from "@rebass/grid";
import Page from "../components/Page";
import { Section, Wide } from "../components/Layout";
import styled from "styled-components";
import { H1, P, Intro, H2 } from "../components/Typography";
import Img from "gatsby-image";
import { Hero } from "../components/Layout/Hero";

const Image = styled(Img)`
  width: 10rem;
  height: 10rem;
  background-size: cover;
  display: block;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin-bottom: 1rem;
`;

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
          <Intro>Om vår organisation</Intro>
        </Hero>
        <Section>
          <Wide>
            {allContentfulOrganisation.edges.map(({ node }) => {
              return (
                <>
                  <H2>{node.title}</H2>
                  <P
                    dangerouslySetInnerHTML={{
                      __html: node.text.childMarkdownRemark.html
                    }}
                  />
                  <Flex flexWrap="wrap" width="100%" alignItems="center">
                    {node.persons.map(person => {
                      return (
                        <Flex
                          width={[1 / 2, 1 / 3]}
                          alignItems="center"
                          flexDirection="column"
                          justifyContent="center"
                        >
                          <Image fluid={person.image.fluid} />
                          <P>{person.name}</P>
                          <P>{person.role}</P>
                        </Flex>
                      );
                    })}
                  </Flex>
                </>
              );
            })}
          </Wide>
        </Section>
      </Page>
    )}
  />
);

export default ContactPage;
