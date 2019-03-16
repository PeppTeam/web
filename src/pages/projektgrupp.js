import React from "react";

import Page from "../components/Page";
import { H1, P, Intro } from "../components/Typography";
import { Quote } from "../components/Typography/Quote";
import { Hero } from "../components/Layout/Hero";
import { ColorCard } from "../components/Card/Card";
import { Narrow, Section } from "../components/Layout";
import { Flex } from "@rebass/grid";

const PG = () => (
  <Page>
    <>
      <Hero>
        <Narrow>
          <H1>Vill du driva Pepp i din stad?</H1>
        </Narrow>
      </Hero>
      <Section>
        <Narrow>
          <Intro>
            Projektgruppen är en grupp av människor, i de flesta fall
            ingenjörsstudenter, som brinner för Pepps vision och som tillsammans
            ansvarar för mentorsprogrammet i respektive stad
          </Intro>
          <P>
            Projektledare väljs av styrelsen under våren varje år och hen
            arbetar sedan med att sätta ihop sin projektgrupp. Under hösten
            arbetar projektgruppen med rekrytering och planering av
            mentorsprogrammet de startar upp i början av våren.
            Mentorsprogrammet och projektet pågår sedan fram till sommaren och
            avslutas med ett stort avslutningsevent.
          </P>
          <P>
            Hur stora projektgrupperna är och exakt vilka roller om ingår
            skiljer sig mellan omgångar och städer. Kanske vill en projektgrupp
            fokusera på att utveckla hur Pepp anordnar event, då kan de ta med
            extra många eventansvariga. En annan projektgrupp kanske får en
            ansökan från en person som gärna vill lära sig att göra film, då
            skulle den projektgruppen kunna stärkas upp med rollen som
            Filmansvarig. Gemensamt för alla städer är att det finns
            ansvarsområden inom eventplanering, företagskontakt, marknadsföring,
            ekonomi samt HR inom mentorskapsprogrammet.
          </P>
        </Narrow>
        <Quote
          quote="Jag tyckte att arbetet med Pepp var så roligt tack vare alla
          människorna jag kom i kontakt med under min tid i projektgruppen.
          Organisationen lockade verkligen till sig helt fantastiska personer."
          saidBy="Petter"
        />
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

export default PG;
