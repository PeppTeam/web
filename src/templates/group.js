import React from "react";
// import { Link, graphql } from "gatsby";
import Page from "../components/Page";
import Img from "gatsby-image";
import { H1, H2, Intro, Content } from "../components/Typography";
import { Narrow } from "../components/Layout";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";

const Person = styled(Box)`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const Name = styled.p`
  color: ${props => props.theme.pop};
  font-weight: 700;
  margin: 0;
`;

const Role = styled.p`
  font-family: Raleway;
  margin: 0;
`;

const Study = styled.p`
  font-family: Raleway;
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.5;
`;

export default function Group({ data }) {
  const group = data.contentfulGroup;
  return (
    <Page>
      <Narrow>
        <H1>{group.title}</H1>
        <Intro
          dangerouslySetInnerHTML={{
            __html: group.intro.childMarkdownRemark.html
          }}
        />
        <Content
          dangerouslySetInnerHTML={{
            __html: group.body.childMarkdownRemark.html
          }}
        />
        <H2>Vi är Pepp {group.title}</H2>
        <Flex>
          {group.persons.map(person => {
            return (
              <Person key={person.name} width={1 / 3}>
                <Image fluid={person.image.fluid} />
                <Name>{person.name}</Name>
                <Role>{person.role}</Role>
                <Study>{person.education}</Study>
              </Person>
            );
          })}
        </Flex>
      </Narrow>
    </Page>
  );
}

export const groupPageQuery = graphql`
  query GroupPageBySlug($slug: String!) {
    contentfulGroup(slug: { eq: $slug }) {
      title
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
