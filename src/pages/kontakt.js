import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Flex, Box } from "@rebass/grid";
import Page from "../components/Page";
import { Wide } from "../components/Layout";
import styled from "styled-components";

const StyledGroupCard = styled.div`
  margin: 1em 1em;
  padding: 1em 1em;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  font-family: Raleway;
`;

const Name = styled.p`
  color: ${props => props.theme.body};
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0;
`;

const CardLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
    border-bottom: 1px solid ${props => props.theme.body};
    color: ${props => props.theme.body};
  }
`;

const CardMail = styled.a`
  color: ${props => props.theme.meta};
  margin-bottom: 1.5em;
  font-size: 1.2em;
  font-weight: 700;
`;

const GroupCard = ({ name, url, mail }) => (
  <StyledGroupCard>
    <Name>{name}</Name>
    <CardMail>{mail}</CardMail>
    <CardLink to={url}>Om Pepp {name}</CardLink>
  </StyledGroupCard>
);

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query ContactPage {
        allContentfulGroup {
          edges {
            node {
              title
              slug
              mail
            }
          }
        }
      }
    `}
    render={({ allContentfulGroup }) => (
      <Page>
        <Wide>
          <Flex>
            {allContentfulGroup.edges.map(({ node }) => {
              return (
                <Box width={1 / 3} key={node.name}>
                  <GroupCard
                    name={node.title}
                    url={node.slug}
                    mail={node.mail}
                  />
                </Box>
              );
            })}
          </Flex>
        </Wide>
      </Page>
    )}
  />
);

export default ContactPage;
