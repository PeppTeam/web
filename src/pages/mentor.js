import React from "react";

import Page from "../components/Page";
import { Hero } from "../components/Layout/Hero";
import { Content } from "../components/Typography";
import { LinkCards } from "../components/Card/LinkCards";

const Mentor = () => (
  <Page>
    <>
      <Hero
        title="Vill du peppa andra?"
        intro="Studerar du teknik på högskolenivå och vill bidra till en mer
            jämställd ingenjörsvärld? Pepp är ett mentorskapsprogram där du som
            student kan engagera dig som mentor."
      />

      <Content>
        <p>
          Vi letar efter mentorer som kan agera förebild för gymnasietjejer*
          under vårterminen. Som mentor är du närmaste kontaktperson för en
          adept som är nyfiken på ingenjörens roll och allt vad det kan
          innebära, och utöver era mentorsträffar går ni tillsammans på de event
          som Pepp anordnar.
        </p>
        <p>
          Genom mentorskapet får du chans att utveckla ditt ledarskap, bli
          expert på att lyssna och bolla idéer samt få ta del av nätverket Pepp.
        </p>
        <blockquote>
          För mig var mentorskapet mycket givande, jag fick energi av att kunna
          peppa någon och visa min adept att teknik inte bara är för killar. Min
          adept och jag träffades och fikade, hon kom på studiebesök i min klass
          och jag visade henne runt på skolan en vanlig dag. Vi hade, och har
          fortfarande, kontakt via olika sociala medier."
        </blockquote>
        <cite>Klara</cite>
      </Content>
     <LinkCards />
    </>
  </Page>
);

export default Mentor;
