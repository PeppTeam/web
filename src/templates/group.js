import React from "react";
// import { Link, graphql } from "gatsby";
import Page from "../components/Page";
import Img from "gatsby-image";
import { H1, Intro, Content } from "../components/Typography";
import { Section, Wide, Narrow } from "../components/Layout";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";
import { ImageHero } from "../components/Layout/Hero";
import { PersonCard } from "../components/Card/Card";
const Person = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  width: 150px;
  height: 150px;
  background-size: cover;
  display: block;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin-bottom: 1rem;
`;

const Name = styled(Box)`
  color: ${props => props.theme.primary};
  font-weight: 700;
`;

const Role = styled(Box)`
  font-size: 0.8rem;
  color: ${props => props.theme.text};
`;

const Study = styled(Box)`
  font-family: Raleway;
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.5;
  color: ${props => props.theme.meta};
`;

export default function Group({ data }) {
  const group = data.contentfulGroup;
  return (
    <Page>
      <ImageHero
        Tag="section"
        fluid={group.featuredImage.fluid}
        backgroundColor={`#464696`}
      >
        <Section>
          <Narrow>
            <H1>{group.title}</H1>
            <Intro
              dangerouslySetInnerHTML={{
                __html: group.intro.childMarkdownRemark.html
              }}
            />
          </Narrow>
        </Section>
      </ImageHero>
      <Section>
        <Narrow>
          <Content
            dangerouslySetInnerHTML={{
              __html: group.body.childMarkdownRemark.html
            }}
          />
        </Narrow>
      </Section>
      <Section>
        <Wide alignItems="center">
          <Flex width="100%" flexWrap="wrap" justifyContent="center">
            {group.persons.map(person => {
              return (
                <PersonCard
                  image={person.image}
                  name={person.name}
                  role={person.role}
                />
              );
            })}
          </Flex>
        </Wide>
      </Section>
    </Page>
  );
}

export const groupPageQuery = graphql`
  query GroupPageBySlug($slug: String!) {
    contentfulGroup(slug: { eq: $slug }) {
      title
      featuredImage {
        fluid(maxWidth: 2048) {
          src
          srcSet
          sizes
          aspectRatio
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
`;
