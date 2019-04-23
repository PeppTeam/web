import React from "react";
import { graphql } from "gatsby";
import Page from "../components/Page";
import styled from "styled-components";
import { Link } from "gatsby";
import { LinkCards } from "../components/Card/LinkCards";

export const Logo = styled.img`
  height: auto;
  width: 100%;
`;

export default function HomePage({ data }) {
  const allPartners = data.allContentfulPartner.edges.filter(({ node }) => {
    return node.homePage === "Partner";
  });
  const allFriends = data.allContentfulPartner.edges.filter(({ node }) => {
    return node.homePage === "Friend";
  });
  const allGroups = data.allContentfulGroup.edges;
  return (
    <Page>
      <section className="hero is-info is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Vi skapar nya förebilder och breddar synen på teknik
            </h1>
            <Link className="button is-white" to="ansok">
              Join
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>
                Pepp är ett mentorsskapsprogram där du som tjej* får en mentor
                från universitetet som hjälper dig upptäcka de oändliga
                möjligheterna teknikbranschen har att erbjuda. Det spelar ingen
                roll om du är helt oteknisk, väldigt teknikintresserad eller
                något däremellan. Pepp är för alla oavsett bakgrund eller
                intressen!
              </p>
              <p>
                Sedan starten 2013 har över 800 gymnasietjejer och
                ingenjörsstudenter deltagit i Pepp som adepter, mentorer eller i
                någon av våra projektgrupper.
              </p>
              <p>
                {" "}
                * Pepp välkomnar alla som identifierar sig som tjejer och som
                går i gymnasiet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-vcentered">
            {allGroups.map(({ node }, index) => (
              <div
                className="column is-one-third"
                key={index}
              >
                <Link className="box has-text-centered" to={node.slug}>
                  <strong>
                    <p className="is-size-3 has-text-weight-bold">
                      {node.title}
                    </p>
                  </strong>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title">Våra partners</h2>
          <div className="columns is-multiline is-vcentered">
            {allPartners.map(({ node }, index) => {
              const logo = <Logo
                src={node.logo.file.url}
                alt={node.logo.file.fileName}
              />
              if (node.link) {
                return (
                  <Link className="column is-1" to={node.link} key={index}>
                    {logo}
                  </Link>
                );
              }
              return (
                <div className="column is-1" to={node.link} key={index}>
                  {logo}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title">Systerorganisationer</h2>
          <div className="columns is-multiline">
            {allFriends.map(({ node }, index) => {
              const logo = <Logo
              src={node.logo.file.url}
              alt={node.logo.file.fileName}
            />
            if (node.link) {
              return (
                <Link className="column is-2" to={node.link} key={index}>
                  {logo}
                </Link>
              );
            }
            return (
              <div className="column is-2" to={node.link} key={index}>
                {logo}
              </div>
            );
            })}
          </div>
        </div>
      </section>
      <LinkCards/>
    </Page>
  );
}

export const homePageQuery = graphql`
  query Partners {
    allContentfulPartner(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          logo {
            file {
              url
              fileName
            }
          }
          homePage
          link
        }
      }
    }
    allContentfulGroup(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
