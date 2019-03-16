import React from "react";
import Page from "../components/Page";

import { Section, Narrow } from "../components/Layout";
import { H1, P } from "../components/Typography";
import { Flex, Box } from "@rebass/grid";
import { PurpleLinkCard, BlueLinkCard } from "../components/LinkCard";
import { Hero } from "../components/Layout/Hero";
// import styled from "styled-components";

const SamarbetePage = () => (
  <Page>
    <Hero>
      <H1>Samarbete</H1>
    </Hero>
    <Section>
      <Narrow>
        <P>
          Vi vet att samarbeten kan leda till oväntat spännande höjder! Därför
          samarbetar Pepp med företag, organisationer och privatpersoner som
          delar våra värderingar. Vi vet också att de företag som engagerar sig
          tillsammans med oss inte bara skapar mervärde genom att bidra till en
          mer jämställd ingenjörsvärld; det har också visat sig att Pepp
          mentorskapsprogram är en unik plattform mellan elever, tekniskt
          studerande och näringslivet som ger både intressanta idéer och vänskap
          i utbyte.
        </P>
        <P>
          En vanlig form av samarbete mellan Pepp och företag sker i form av
          partnerskap lokalt i en av städerna Pepp är verksamma i. Har ni en idé
          på hur vi tillsammans kan skapa roliga event för framtidens
          ingenjörer? Hör av er!
        </P>
      </Narrow>
    </Section>
    <Section>
      <Narrow>
        <Flex>
          <Box width={1 / 2} mr={3}>
            <PurpleLinkCard to="/om-pepp">Om Pepp</PurpleLinkCard>
          </Box>
          <Box width={1 / 2}>
            <BlueLinkCard to="/kontakt">Kontakt</BlueLinkCard>
          </Box>
        </Flex>
      </Narrow>
    </Section>
  </Page>
);

export default SamarbetePage;
