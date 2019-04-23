import React from "react";
import { Link } from "gatsby";
import Page from "../components/Page";
import { Hero } from "../components/Layout/Hero";
import { Content } from "../components/Typography";
import { LinkCards } from "../components/Card/LinkCards";

const About = () => (
  <Page>
    <Hero title="Vill du bli peppad?" />
    <Content>
      <p>
        “Vad gör en ingenjör?” är du troligtvis inte ensam om att ha funderat
        över. Att svaret inte går att förklara i en mening beror på att en
        ingenjör kan vara så många olika saker, men en sak är säker – ingenjören
        jobbar med att lösa morgondagens problem! Ingenjörens bidrag till
        samhället finns överallt i vår vardag; från cykeln du tar dig till
        skolan på till hur du använder den här hemsidan! Ingenjörer har därför
        en nyckelroll att se till att framtidens teknik hjälper oss människor
        att leva på ett hållbart sätt.
      </p>

      <p>
        Pepp finns för att du som gymnasietjej* ska få veta mer om vilka
        otroligt häftiga, spännande och roliga saker ingenjörsyrket kan
        innebära! Som adept i Pepp får du en ingenjörsstuderande tjej* som din
        egen mentor, möjlighet att gå på inspirerande event hos företag i
        ingenjörsbranschen och ett tillfälle att lära känna andra tjejer som
        också är nyfikna på att veta mer om teknik och ingenjörens roll.
      </p>
      <p>
        Om du har några frågor eller funderingar är du välkommen att{" "}
        <Link to="/kontakt">kontakta oss</Link>.
      </p>
    </Content>
    <LinkCards/>
  </Page>
);

export default About;
