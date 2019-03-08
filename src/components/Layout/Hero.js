import styled from "styled-components";
import LandingBackground from "../../assets/background.svg";
import BackgroundImage from "gatsby-background-image";

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: -200px;
  padding-top: 200px;
  background-color: ${props => props.theme.primary};
`;

export const LandingHero = styled(Hero)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  background: url(${LandingBackground});
  background-size: cover;
  background-position: center center;
`;

export const FullHero = styled(Hero)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;

  background-color: ${props => props.theme.purple};
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
