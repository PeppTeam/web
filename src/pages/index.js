import React from "react";
import { graphql } from "gatsby";
import Page from "../components/Page";
import styled from "styled-components";
import { Section, Wide, Narrow } from "../components/Layout";
import { Link } from "gatsby";
import { Flex, Box } from "@rebass/grid";
import { LandingHero } from "../components/Layout/Hero";
import { H1, H2, P, Meta } from "../components/Typography";
import { Card, ColorCard } from "../components/Card/Card";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  width: 20%;
  padding: 20px;
`;

export const Logo = styled.img`
  height: auto;
  width: 100%;
`;

export const Button = styled(Box)`
  background-color: ${props => props.theme.pop};
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 4px;
  color: ${props => props.theme.white};
`;

export default function HomePage({ data }) {
  const allPartners = data.allContentfulPartner.edges.filter(({ node }) => {
    return node.homePage === "Partner";
  });
  const allFriends = data.allContentfulPartner.edges.filter(({ node }) => {
    return node.homePage === "Friend";
  });
  const allGroups = data.allContentfulGroup.edges;
  return (
    <Page>
      <LandingHero>
        <Narrow alignItems="center" mb={4}>
          <H1 center>Vi skapar nya förebilder och breddar synen på teknik</H1>
        </Narrow>
        <Link to="/ansok">
          <Button p={2}>Bli medlem</Button>
        </Link>
      </LandingHero>
      <Section>
        <Narrow>
          <P>
            Pepp är ett mentorsskapsprogram där du som tjej* får en mentor från
            universitetet som hjälper dig upptäcka de oändliga möjligheterna
            teknikbranschen har att erbjuda. Det spelar ingen roll om du är helt
            oteknisk, väldigt teknikintresserad eller något däremellan. Pepp är
            för alla oavsett bakgrund eller intressen!
          </P>
          <P>
            Sedan starten 2013 har över 800 gymnasietjejer och
            ingenjörsstudenter deltagit i Pepp som adepter, mentorer eller i
            någon av våra projektgrupper.
          </P>
          <Meta>
            * Pepp välkomnar alla som identifierar sig som tjejer och som går i
            gymnasiet.
          </Meta>
        </Narrow>
      </Section>
      <Section>
        <Wide>
          <Flex flexWrap="wrap" width="100%" m={-2}>
            {allGroups.map(({ node }) => (
              <Card title={node.title} slug={node.slug} />
            ))}
          </Flex>
        </Wide>
      </Section>
      <Section>
        <Wide>
          <Box mb={4}>
            <H2>Vi stödjer Pepp</H2>
          </Box>
          <Flex flexWrap="wrap" width="100%" alignItems="center" m={-3}>
            {allPartners.map(({ node }) => {
              if (node.logo.file) {
                return (
                  <Box width={[1 / 3, 1 / 5, 1 / 8]} p={4}>
                    <a href={node.link}>
                      <Logo
                        src={node.logo.file.url}
                        alt={node.logo.file.fileName}
                      />
                    </a>
                  </Box>
                );
              } else return null;
            })}
          </Flex>
        </Wide>
      </Section>
      <Section>
        <Wide>
          <Box mb={4}>
            <H2>Systerorganisationer</H2>
          </Box>
          <Flex>
            {allFriends.map(({ node }) => {
              return (
                <Box width={[1 / 2, 1 / 4]}>
                  <a key={node.name} href={node.link}>
                    <Logo
                      src={node.logo.file.url}
                      alt={node.logo.file.fileName}
                    />
                  </a>
                </Box>
              );
            })}
          </Flex>
        </Wide>
      </Section>

      <Section>
        <Narrow>
          <Flex width="100%" flexDirection={["column", "row"]}>
            <ColorCard slug="/om-pepp" title="Om Pepp" />

            <ColorCard slug="/kontakt" title="Kontakt" />
          </Flex>
        </Narrow>
      </Section>
    </Page>
  );
}

export const homePageQuery = graphql`
  query Partners {
    allContentfulPartner(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          logo {
            file {
              url
              fileName
            }
          }
          homePage
        }
      }
    }
    allContentfulGroup(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
