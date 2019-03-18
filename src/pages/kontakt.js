import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Flex } from "@rebass/grid";
import Page from "../components/Page";
import { Wide } from "../components/Layout";
import { FullHero } from "../components/Layout/Hero";
import { ContactCard } from "../components/Card/Card";
import { H1, H2 } from "../components/Typography";
const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query ContactPage {
        allContentfulGroup(sort: {fields: [title], order: ASC})  {
          edges {
            node {
              title
              mail
            }
          }
        }
      }
    `}
    render={({ allContentfulGroup }) => (
      <Page>
        <FullHero>
          <Wide>
            <H1>Kontakta oss</H1>
            <Flex
              flexWrap="wrap"
              width="100%"
              alignItems="center"
              mx={[-2, -4]}
            >
              {[
                { title: "Styrelsen", mail: "styrelsen@blipepp.nu" },
                { title: "IT", mail: "it@blipepp.nu" }
              ].map(c => {
                return <ContactCard title={c.title} mail={c.mail} />;
              })}
            </Flex>
            <H2>Pepp Lokalt</H2>
            <Flex
              flexWrap="wrap"
              width="100%"
              alignItems="center"
              mx={[-2, -4]}
            >
              {allContentfulGroup.edges.map(({ node }) => {
                return <ContactCard title={node.title} mail={node.mail} />;
              })}
            </Flex>
          </Wide>
        </FullHero>
      </Page>
    )}
  />
);

export default ContactPage;
