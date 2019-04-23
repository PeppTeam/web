import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Page from "../components/Page";

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query ContactPage {
        allContentfulGroup(sort: { fields: [title], order: ASC }) {
          edges {
            node {
              title
              mail
            }
          }
        }
      }
    `}
    render={({ allContentfulGroup }) => (
      <Page>
        <section class="section">
          <div class="container">
            <h1>Kontakta oss</h1>
            <div className="columns">
              {[
                { title: "Styrelsen", mail: "styrelsen@blipepp.nu" },
                { title: "IT", mail: "it@blipepp.nu" }
              ].map(c => {
                return (
                  <div className="column">
                    <div className="box">
                      <p>{c.title}</p>
                      <p>{c.mail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h2>Pepp Lokalt</h2>
            <div className="columns">
              {allContentfulGroup.edges.map(({ node }) => {
                return (
                  <div className="column">
                    <div className="box">
                      <p>{node.title}</p>
                      <p>{node.mail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Page>
    )}
  />
);

export default ContactPage;
