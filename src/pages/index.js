import React from "react";
import { graphql } from "gatsby";
import Page from "../components/Page";
import styled from "styled-components";
import { Section, Wide, Narrow } from "../components/Layout";
import { Link } from "gatsby";
import { LinkCard } from "../components/LinkCard";
import { Flex, Box } from "@rebass/grid";
import { LandingHero } from "../components/Layout/Hero";

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
        <Link to="/join">Join</Link>
      </LandingHero>
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
          <h2>Vi stöttar Pepp</h2>
          <Flex flexWrap="wrap" width="100%" alignItems="center">
            {allPartners.map(({ node }) => {
              return (
                <Box width={[1 / 3, 1 / 10]} p={10}>
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
          <h2>Våra vänner</h2>
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
          <Flex width="100%">
            <Box width={1 / 2} px={2}>
              <LinkCard to="/om-pepp">Om Pepp →</LinkCard>
            </Box>
            <Box width={1 / 2} px={2}>
              <LinkCard to="/kontakt">Kontakt →</LinkCard>
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
