import React from "react";
import { graphql } from "gatsby";
import Page from "../components/Page";
import styled from "styled-components";
import { Wide, Narrow } from "../components/Layout";
import { Link } from "gatsby";
import { LinkCard } from "../components/LinkCard";
import { Flex, Box } from "@rebass/grid";

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
      <Wide>
        <Link to="/join">Join</Link>
        <div>
          {allGroups.map(({ node }) => {
            return <Link to={node.slug}>{node.title}</Link>;
          })}
        </div>

        <h2>Vi stöttar Pepp</h2>
        <Container>
          {allPartners.map(({ node }) => {
            return (
              <Item key={node.name}>
                <a href={node.link}>
                  <Logo
                    src={node.logo.file.url}
                    alt={node.logo.file.fileName}
                  />
                </a>
              </Item>
            );
          })}
        </Container>
        <h2>Våra vänner</h2>
        <Container>
          {allFriends.map(({ node }) => {
            return (
              <Item key={node.name} xs={2} sm={2} md={2} lg={2}>
                <a key={node.name} href={node.link}>
                  <Logo
                    src={node.logo.file.url}
                    alt={node.logo.file.fileName}
                  />
                </a>
              </Item>
            );
          })}
        </Container>
      </Wide>
      <Narrow>
        <Flex>
          <Box width={1 / 2}>
            <LinkCard to="/om-pepp">Om Pepp →</LinkCard>
          </Box>
          <Box width={1 / 2}>
            <LinkCard to="/kontakt">Kontakt →</LinkCard>
          </Box>
        </Flex>
      </Narrow>
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
