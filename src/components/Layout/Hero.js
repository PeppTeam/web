import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { Section } from "../Layout";

export const Hero = styled(Section)`
  margin-top: -200px;
  padding-top: 200px;
  align-items: center;
  justify-content: center;
`;

export const LandingHero = styled(Hero)`
  min-height: 80vh;
  background-color: ${props => props.theme.gray};
`;

export const FullHero = styled(Hero)`
  min-height: 100vh;
  background-color: ${props => props.theme.gray};
`;

export const ImageHero = styled(BackgroundImage)`
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 50vh;
  margin-top: -200px;
  padding-top: 200px;
  padding-bottom: 10px;
`;
