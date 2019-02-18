import React from "react";
import { Flex, Box } from "@rebass/grid";
import Page from "../components/Page";
import { H2, P } from "../components/Typography";
import { Narrow } from "../components/Layout";
import { LinkCard } from "../components/LinkCard";

const MemberPage = () => (
  <Page>
    <Narrow>
      <Flex>
        <Box width={1 / 2} p={2}>
          <LinkCard to="/projektgrupp">Projektgrupp</LinkCard>
        </Box>
        <Box width={1 / 2} p={2}>
          <LinkCard to="/mentor">Mentor</LinkCard>
        </Box>
      </Flex>
      <H2>Just nu söker vi också:</H2>
      <P>Content team Till annons</P>
      <P>
        Vill du engagera dig i Pepp eller starta upp Pepp i din stad? Hör av dig
        till styrelsen på styrelsen@blipepp.nu
      </P>
    </Narrow>
  </Page>
);

export default MemberPage;
