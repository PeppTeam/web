import React from "react";

import Page from "../components/Page";
import { H1, P, Intro } from "../components/Typography";
import { Quote } from "../components/Typography/Quote";
import { Hero } from "../components/Layout/Hero";
import { Section, Narrow } from "../components/Layout";
import { Flex } from "@rebass/grid";
import { ColorCard } from "../components/Card/Card";

const Mentor = () => (
  <Page>
    <>
      <Hero>
        <Narrow>
          <H1>Vill du peppa andra?</H1>
          <Intro>
            Studerar du teknik på högskolenivå och vill bidra till en mer
            jämställd ingenjörsvärld? Pepp är ett mentorskapsprogram där du som
            student kan engagera dig som mentor.
          </Intro>
        </Narrow>
      </Hero>
      <Section>
        <Narrow>
          <P>
            Vi letar efter mentorer som kan agera förebild för gymnasietjejer*
            under vårterminen. Som mentor är du närmaste kontaktperson för en
            adept som är nyfiken på ingenjörens roll och allt vad det kan
            innebära, och utöver era mentorsträffar går ni tillsammans på de
            event som Pepp anordnar.
          </P>
          <P>
            Genom mentorskapet får du chans att utveckla ditt ledarskap, bli
            expert på att lyssna och bolla idéer samt få ta del av nätverket
            Pepp.
          </P>
          <Quote
            statement="För mig var mentorskapet mycket givande, jag fick energi av att kunna peppa någon och visa min adept att teknik inte bara är för killar.  Min adept och jag träffades och fikade, hon kom på studiebesök i min klass och jag visade henne runt på skolan en vanlig dag. Vi hade, och har fortfarande, kontakt via olika sociala medier."
            cite="Klara"
          />
        </Narrow>
      </Section>
      <Section>
        <Narrow>
          <Flex>
            <ColorCard slug="/om-pepp" title="Om Pepp" />
            <ColorCard slug="/kontakt" title="Kontakt" />
          </Flex>
        </Narrow>
      </Section>
    </>
  </Page>
);

export default Mentor;
