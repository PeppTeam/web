import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Flex, Box } from "@rebass/grid";
import Page from "../components/Page";
import { Wide, Narrow } from "../components/Layout";
import styled from "styled-components";
import { H1, P } from "../components/Typography";
import Img from "gatsby-image";

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

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query OrgPage {
        allContentfulOrganisation {
          edges {
            node {
              title
              persons {
                name
                role
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
        }
      }
    `}
    render={({ allContentfulOrganisation }) => (
      <Page>
        <Wide>
          <Narrow>
            <H1>Organisation</H1>
            <P>
              Pepps styrelse består av personer från olika delar av landet med
              olika erfarenheter som alla brinner för Pepps vision. Vissa av oss
              pluggar fortfarande och andra har varit ute i arbetslivet ett par
              år men vi har alla någon koppling till tekniska studier och
              ingenjörsyrket. Vårt arbete går ut på att samordna
              projektgruppernas arbete ute i städerna och ge dem
              förutsättningarna de behöver för att kunna driva peppande
              mentorsprogram. Vi arbetar även strategiskt med etablering i nya
              städer, utveckling av vårt koncept samt vår visuella identitet.
            </P>
          </Narrow>
          {allContentfulOrganisation.edges.map(({ node }) => {
            return (
              <>
                <p>{node.title}</p>
                <Flex>
                  {node.persons.map(person => {
                    return (
                      <Box width={512} px={2} key={node.name}>
                        <Image fluid={person.image.fluid} />
                        <P>{person.name}</P>
                        <P>{person.role}</P>
                      </Box>
                    );
                  })}
                </Flex>
              </>
            );
          })}
        </Wide>
      </Page>
    )}
  />
);

export default ContactPage;
