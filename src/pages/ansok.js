import React from "react";
import Page from "../components/Page";
import { Link } from "gatsby";

const Content = ({ content }) => {
  return (
    <Link className="box" to={content.to}>
      <p class="title">{content.title}</p>
      <p>{content.subtitle}</p>
    </Link>
  );
};

const MemberPage = () => (
  <Page>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-3 is-offset-3">
              <Content
                content={{
                  title: "Vill du bli peppad?",
                  subtitle:
                    "För dig på gymnasiet som är nyfiken på hur det är att plugga en teknisk utbildning och arbeta som ingenjör.",
                  to: "adept"
                }}
              />
            </div>
            <div class="column is-3 ">
              <Content
                content={{
                  title: "Vill du peppa andra?",
                  subtitle:
                    "Vi söker dig som studerar en teknisk utbildning och vill engagera dig i Pepp som mentor.",

                  to: "mentor"
                }}
              />
            </div>
            <div class="column is-3 is-offset-3">
              <Content
                content={{
                  title: "Vill du driva Pepp i din stad?",
                  subtitle:
                    "Pepp drivs lokalt av engagerade ingenjörsstudenter runt om i Sverige – vill du vara med?",
                  to: "projektgrupp"
                }}
              />
            </div>
            <div class="column is-3 ">
              <Content
                content={{
                  title: "Vill du engagera dig i styrelsen?",
                  subtitle:
                    "Vi är alltid nyfikna på att träffa personer som vill arbeta strategiskt med Pepp. Hör av dig till oss!",

                  to: "organisation"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Page>
);

export default MemberPage;

