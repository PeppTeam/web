import React from "react";
import { graphql } from "gatsby";
import Page from "../components/Page";
import styled from "styled-components";
import { Section, Wide, Narrow } from "../components/Layout";
import { Link } from "gatsby";
import { PurpleLinkCard, BlueLinkCard } from "../components/LinkCard";
import { Flex, Box } from "@rebass/grid";
import { LandingHero } from "../components/Layout/Hero";
import { H1, H2, P, Meta } from "../components/Typography";
const GroupCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  text-decoration: none;
  font-family: Raleway;
  font-weight: 700;
  color: ${props => props.theme.purple};
  border-radius: 4px;
  font-size: 2em;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.yellow};
  }
`;

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
  border-radius: 16px;
  color: ${props => props.theme.body};
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
        <Narrow alignItems="center">
          <H1>Vi skapar nya förebilder och breddar synen på teknik</H1>
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
          <Flex flexWrap="wrap" width="100%">
            {allGroups.map(({ node }) => (
              <Box width={[1 / 2, 1 / 3]}>
                <GroupCard to={node.slug}>{node.title}</GroupCard>
              </Box>
            ))}
          </Flex>
        </Wide>
      </Section>
      <Section>
        <Wide>
          <Box mb={4}>
            <H2>Vi stödjer Pepp</H2>
          </Box>
          <Flex flexWrap="wrap" width="100%" alignItems="center">
            {allPartners.map(({ node }) => {
              return (
                <Box width={[1 / 3, 1 / 5, 1 / 8]} p={10}>
                  <a href={node.link}>
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
            <Box width={[1, 1 / 2]} px={2}>
              <PurpleLinkCard to="/om-pepp">Om Pepp</PurpleLinkCard>
            </Box>
            <Box width={[1, 1 / 2]} px={2}>
              <BlueLinkCard to="/kontakt">Kontakt</BlueLinkCard>
            </Box>
          </Flex>
        </Narrow>
      </Section>
    </Page>
  );
}

export const homePageQuery = graphql`
  query Partners {
    allContentfulPartner {
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
    allContentfulGroup {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
