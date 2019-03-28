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
      <section class="hero is-info is-large">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
              Vi skapar nya förebilder och breddar synen på teknik
            </h1>
            <Link class="button is-white" to="ansok">
              Join
            </Link>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
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

      <section class="section">
        <div class="container">
          <div class="columns is-multiline is-vcentered">
            {allGroups.map(({ node }) => (
              <div
                class="column is-one-third"
                title={node.title}
                slug={node.slug}
              >
                <Link class="box has-text-centered" to={node.slug}>
                  <strong>
                    <p className="is-size-3 has-text-weight-bold	">
                      {node.title}
                    </p>
                  </strong>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="subtitle">Vi stödjer Pepp</h2>
          <div class="columns is-multiline is-vcentered">
            {allPartners.map(({ node }) => {
              return (
                <Link class="column is-1" to={node.link}>
                  <a href={node.link}>
                    <Logo
                      src={node.logo.file.url}
                      alt={node.logo.file.fileName}
                    />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="subtitle">Systerorganisationer</h2>
          <div class="columns is-multiline">
            {allFriends.map(({ node }) => {
              return (
                <Link class="column is-2" to={node.link}>
                  <a href={node.link}>
                    <Logo
                      src={node.logo.file.url}
                      alt={node.logo.file.fileName}
                    />
                  </a>
                </Link>
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
