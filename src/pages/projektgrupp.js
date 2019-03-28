import React from "react";

import Page from "../components/Page";
import { Content, } from "../components/Typography";
import { Quote } from "../components/Typography/Quote";
import { Hero } from "../components/Layout/Hero";
import { LinkCards } from "../components/Card/LinkCards";

const PG = () => (
  <Page>
    <>
      <Hero
        title="Vill du driva Pepp i din stad?"
        intro="Projektgruppen är en grupp av människor, i de flesta fall
            ingenjörsstudenter, som brinner för Pepps vision och som tillsammans
            ansvarar för mentorsprogrammet i respektive stad"
      />
      <Content>
        <p>
          Projektledare väljs av styrelsen under våren varje år och hen arbetar
          sedan med att sätta ihop sin projektgrupp. Under hösten arbetar
          projektgruppen med rekrytering och planering av mentorsprogrammet de
          startar upp i början av våren. Mentorsprogrammet och projektet pågår
          sedan fram till sommaren och avslutas med ett stort avslutningsevent.
        </p>
        <p>
          Hur stora projektgrupperna är och exakt vilka roller om ingår skiljer
          sig mellan omgångar och städer. Kanske vill en projektgrupp fokusera
          på att utveckla hur Pepp anordnar event, då kan de ta med extra många
          eventansvariga. En annan projektgrupp kanske får en ansökan från en
          person som gärna vill lära sig att göra film, då skulle den
          projektgruppen kunna stärkas upp med rollen som Filmansvarig.
          Gemensamt för alla städer är att det finns ansvarsområden inom
          eventplanering, företagskontakt, marknadsföring, ekonomi samt HR inom
          mentorskapsprogrammet.
        </p>
        <Quote
          statement="Jag tyckte att arbetet med Pepp var så roligt tack vare alla
          människorna jag kom i kontakt med under min tid i projektgruppen.
          Organisationen lockade verkligen till sig helt fantastiska personer."
          attribution="Petter"
        />
      </Content>

      <LinkCards/>
    </>
  </Page>
);

export default PG;
