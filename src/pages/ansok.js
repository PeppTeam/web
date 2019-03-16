import React from "react";
import { Flex } from "@rebass/grid";
import Page from "../components/Page";
import { H2, P } from "../components/Typography";
import { Narrow } from "../components/Layout";
import { FullHero } from "../components/Layout/Hero";
import { ColorCard } from "../components/Card/Card";

const MemberPage = () => (
  <Page>
    <FullHero>
      <Narrow>
        <Flex width="100%">
          <ColorCard slug="/projektgrupp" title="Projektgrupp" />
          <ColorCard slug="/mentor" title="Mentor" />
        </Flex>
        <H2>Just nu söker vi också:</H2>
        <P>Content team Till annons</P>
        <P>
          Vill du engagera dig i Pepp eller starta upp Pepp i din stad? Hör av
          dig till styrelsen på styrelsen@blipepp.nu
        </P>
      </Narrow>
    </FullHero>
  </Page>
);

export default MemberPage;
