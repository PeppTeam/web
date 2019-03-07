import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 30vh;
  margin-top: -30vh;
  padding-top: 30vh;
  background-color: ${props => props.theme.primary};
`;

export const LandingHero = styled(Hero)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60vh;
  margin-top: -30vh;
  padding-top: 20vh;
  background-color: ${props => props.theme.purple};
`;

export const FullHero = styled(Hero)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  margin-top: -30vh;
  padding-top: 20vh;
  background-color: ${props => props.theme.purple};
`;
