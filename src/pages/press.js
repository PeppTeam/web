import React from "react";
import Page from "../components/Page";
import { Section, Narrow } from "../components/Layout";
import {  H2 } from "../components/Typography";
import {  Hero } from "../components/Layout/Hero";
import { Flex } from "@rebass/grid";
import styled from "styled-components";

const articles = [
  {
    year: "2018",
    articles: [
      {
        title: "Så ska tjejer bli mer pepp på teknik",
        url:
          "https://corren.se/nyheter/sa-ska-tjejer-bli-mer-pepp-pa-teknik-om5598925.aspx",
        source: "Pepp i Corren"
      },
      {
        title: "Peppande mentorsprogram för inspiration till ingenjörsyrket",
        url:
          "https://www.nyteknik.se/ingenjorskarriar/peppande-mentorsprogram-for-inspiration-till-ingenjorsyrket-6903155",
        source: "Pepp i NyTeknik"
      }
    ]
  },
  {
    year: "2017",
    articles: [
      {
        title: "Peppar för fler kvinnliga ingenjörer",
        url:
          "http://www.norrbottensaffarer.se/na/peppar-for-fler-kvinnliga-ingenjorer-nm4691803.aspx",
        source: "Pepp i Norrbottens Affärer"
      },
      {
        title:
          "Klaga inte för att det är svårt att anställa tjejer, gör nåt åt det!",
        url:
          "http://arcticmirror.se/2017/05/04/fler-tjejer-till-tekniska-utbildningar/",
        source: "Pepp i Affärspodden"
      },
      {
        title: "Kvinnor peppas att plugga teknik",
        url:
          "http://www.kuriren.nu/nyheter/kvinnor-peppas-att-plugga-teknik-nm4480399.aspx",
        source: "Pepp i Norrbottens Kuriren"
      },
      {
        title: "De teknik-peppar gymnasietjejer",
        url:
          "http://www.nsd.se/nyheter/lulea/de-teknik-peppar-gymnasietjejer-10407221.aspx",
        source: "NSD"
      }
    ]
  },
  {
    year: "2016",
    articles: [
      {
        title: "Inspiration och Pepp på Chalmersdagen 2016",
        url: "http://www.chalmers.se/sv/nyheter/Sidor/Chalmersdagen-2016.aspx",
        source: "Intervju för Chalmers"
      },
      {
        title: "Superpepp för unga tjejer att bli ingenjörer",
        url:
          "https://infotechumea.se/nyheter/superpepp-for-unga-tjejer-att-bli-ingenjorer#.Vup-XFA5jzo.facebook",
        source: "Infotech Umeå"
      },
      {
        title: "Pepp inspirerar tjejer att bli ingenjörer",
        url:
          "http://www.teknat.umu.se/pressinformation/nyhetsvisning//pepp-inspirerar-tjejer-att-bli-ingenjorer.cid265012",
        source: "Intervju med Umeå Universitet"
      },
      {
        title: "Pepp uppmanar tjejer att plugga till ingenjör",
        url:
          "http://metromode.se/creative/2016/03/03/pepp-uppmanar-tjejer-att-plugga-till-ingenjor/",
        source: "Metro Mode "
      },
      {
        title: "Beslut på vettiga grunder",
        url: "http://thescholar.se/2015/12/karriar/beslut-pa-vettiga-grunder/",
        source: "The Scholar"
      }
    ]
  }
];

const Article = styled.a`
  color: ${props => props.theme.link};
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25em;
  margin-bottom: 6px;

  &:hover {
    opacity: 0.7;
  }
`;

const Source = styled.p`
  color: ${props => props.theme.text};
`;

const PressPage = () => (
  <Page>
  <Hero title="Press"/>

    <Section>
      <Narrow>
        {articles.map(year => {
          return (
            <>
              <H2>{year.year}</H2>
              <Flex flexDirection="column" mb={4} mt={2}>
                {year.articles.map(article => {
                  return (
                    <Flex mb={3} flexDirection="column">
                      <Article href={article.url} target="_blank">
                        {article.title}
                      </Article>
                      <Source>{article.source}</Source>
                    </Flex>
                  );
                })}
              </Flex>
            </>
          );
        })}
      </Narrow>
    </Section>
  </Page>
);

export default PressPage;
