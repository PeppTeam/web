import React from "react";
import Page from "../components/Page";
import { H1, Intro, Content } from "../components/Typography";
import { Section, Wide, Narrow } from "../components/Layout";
import { Flex } from "@rebass/grid";
import { ImageHero } from "../components/Layout/Hero";
import { PersonCard } from "../components/Card/Card";

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
            <H1 white center>
              {group.title}
            </H1>
            <Intro
              white
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
          fluid(maxWidth: 800, maxHeight: 600) {
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
