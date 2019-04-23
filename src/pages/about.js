import React from "react";
import Page from "../components/Page";
import { Hero } from "../components/Layout/Hero";
import { Content } from "../components/Typography";
const About = () => (
  <Page>
    <Hero
      title="What is Pepp?"
      intro="  Pepp is a mentoring program that intends to inspire more girls and
            young women to immerse themselves in technical studies."
    />

    <Content>
      <p>
        Pepp strives to encourage, challenge stereotypes and show the endless
        possibilities that engineering can offer. By gathering girls in upper
        secondary, university students and companies, Pepp creates a platform
        where thoughts and experiences can be exchanged, dreams grow and visions
        created. Visionaries in Pepp shares the goal to see more female
        engineers and are convinced that this initiative can make a difference.
      </p>
      <p>
        The target group is girls in ages between 16 to 18, they get the
        opportunity to talk to a mentor – who majors in technical studies on
        university level – about anything they wish, where sky is the limit. The
        mentee will also be able to attend evenings filled with inspiration in
        collaboration with companies and motivational speakers, where they get
        an insight of what an engineer can do after finished studies, both
        expected and unexpected roles.
      </p>
      <p>
        The mentorship program is financed through volunteer work and with
        contributions from companies who share the same vision of the
        significance of more girls entering the world of engineering.
      </p>
      <p>
        Want to contribute to Pepp? Contact us at{" "}
        <a href="mailto:styrelsen@blipepp.nu">styrelsen@blipepp.nu</a>
      </p>
    </Content>
  </Page>
);

export default About;
