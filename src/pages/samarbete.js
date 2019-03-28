import React from "react";
import Page from "../components/Page";

import { Content } from "../components/Typography";
import { Hero } from "../components/Layout/Hero";
import { LinkCards } from "../components/Card/LinkCards";

const SamarbetePage = () => (
  <Page>
    <Hero title="Samarbete" />
    <Content>
      <p>
        Vi vet att samarbeten kan leda till oväntat spännande höjder! Därför
        samarbetar Pepp med företag, organisationer och privatpersoner som delar
        våra värderingar. Vi vet också att de företag som engagerar sig
        tillsammans med oss inte bara skapar mervärde genom att bidra till en
        mer jämställd ingenjörsvärld; det har också visat sig att Pepp
        mentorskapsprogram är en unik plattform mellan elever, tekniskt
        studerande och näringslivet som ger både intressanta idéer och vänskap i
        utbyte.
      </p>
      <p>
        En vanlig form av samarbete mellan Pepp och företag sker i form av
        partnerskap lokalt i en av städerna Pepp är verksamma i. Har ni en idé
        på hur vi tillsammans kan skapa roliga event för framtidens ingenjörer?
        Hör av er!
      </p>
    </Content>
    <LinkCards />
  </Page>
);

export default SamarbetePage;
