import React from "react";
// import { Link, graphql } from "gatsby";
import Page from "../components/Page";
import Img from "gatsby-image";
import { H1, H2, Intro, Content } from "../components/Typography";
import { Narrow, Wide } from "../components/Layout";
import styled from "styled-components";

// const Person = styled.div`
//   margin-bottom: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

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

// const Name = styled.p`
//   color: #fecc02;
//   font-family: Raleway;
//   font-weight: 700;
//   margin: 0;
// `;

// const Role = styled.p`
//   font-family: Raleway;
//   margin: 0;
// `;

// const Study = styled.p`
//   font-family: Raleway;
//   font-size: 0.8rem;
//   margin: 0;
//   opacity: 0.5;
// `;

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
      </Narrow>
      <Wide>
        {group.persons.map(person => {
          return (
            <div key={person.name}>
              <Image fluid={person.image.fluid} />
              <p>{person.name}</p>
              <p>{person.title}</p>
            </div>
          );
        })}
      </Wide>
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
    }
  }
`;
