import React from "react";

import Page from "../components/Page";
import { H1, Content } from "../components/Typography";
import { Hero } from "../components/Layout/Hero";

import { Narrow } from "../components/Layout";

const PrivacyPage = () => (
  <Page>
    <Hero>
      <H1>Dataskydd</H1>
    </Hero>
    <Narrow>
      <Content>
        <p>
          Pepp lägger stor vikt vid att värna om våra medlemmars integritet och
          är därför noggranna med att skydda dina personuppgifter. För oss är
          det viktigt att du ska kunna känna dig trygg med hur vi hanterar dina
          personuppgifter och vi är därför öppna med hur vi samlar in och
          behandlar dina uppgifter.
        </p>
        <p>
          Genom att acceptera denna personuppgiftspolicy samtycker du till att
          dina personuppgifter behandlas i enlighet med denna
          personuppgiftspolicy.
        </p>
        <p>
          Pepp behandlar dina personuppgifter för att kunna hantera din
          förfrågan/intresseanmälan. Personuppgifterna används för att kunna
          kontakta dig, samt kommunicera information till dig. Personuppgifterna
          är endast tillgängliga för ett begränsat antal av Pepp:s ideella
          medarbetare, och lämpliga tekniska säkerhetsåtgärder är vidtagna för
          att säkerställa att personuppgifterna är trygga. Pepp använder
          underleverantörer av system där dina personuppgifterna hanteras. Vissa
          av underleverantörerna är delvis lokaliserade utanför EU, men vi
          använder endast underleverantörer som arbetar i enlighet med GDPR.
        </p>
        <p>
          Dina personuppgifter kommer aldrig att delas vidare till tredje part.
        </p>
        <p>
          Om du inte har visat intresse för informationen vi skickat till dig
          inom 18 månader kommer alla dina personuppgifter att raderas ur våra
          system.
        </p>
        <p>
          Har du frågor utöver informationen som finns i denna policy kan du
          kontakta oss på dataskydd@blipepp.nu.
        </p>
        <p>
          Om du önskar bli borttagen ur Pepp:s system, eller vill veta vilken
          information som finns lagrad om dig, vänligen skicka ett mail till{" "}
          <a href="mailto:dataskydd@blipepp.nu">dataskydd@blipepp.nu</a>.
        </p>
      </Content>
    </Narrow>
  </Page>
);

export default PrivacyPage;
