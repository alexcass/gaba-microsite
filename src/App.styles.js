import styled from "styled-components";

const widthConstraint = `
  padding-left: 5vw;
  padding-right: 5vw;

  @media (min-width: 1200px) {
    padding-left: calc((100vw - 1140px) / 2);
    padding-right: calc((100vw - 1140px) / 2);
  }
`;

const ModalBack = `
  position: fixed;
  width: 100%;
  background: rgba(0,0,0,0.8);
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
`;

export const LandingPage = styled.div`
  font-family: "Poppins", sans-serif;
  color: #333;

  a {
    text-decoration: none;
  }

  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 400;
  }

  button {
    font: inherit;
    outline: none;
    cursor: pointer;
  }

  section {
    display: none;
    padding-top: 80px;
    padding-bottom: 80px;

    ${widthConstraint}
  }

  ${({ currentSection }) =>
    currentSection === "journey"
      ? `#journey { display: block; }`
      : `section:not(#journey) { display: block; }`}

  h2,
  h4 {
    color: #111741;
  }

  h2 {
    margin: 25px 0;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
    position: relative;
  }

  h2:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 74px;
    width: 108px;
    background-image: url("./images/h2-background.png");
    background-repeat: no-repeat;
    z-index: -1;
  }

  h3 {
    font-size: 32px;
    line-height: 35px;
    margin: 0 0 20px;
    font-weight: 600;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  height: 48px;
  padding-top: 18px;
  padding-bottom: 18px;
  transition: all 0.2s;
  z-index: 10;
  ${({ atTop, forceBackground }) =>
    (!atTop || forceBackground) &&
    `
    background: #fff;
    color: #111741;
    box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1);
  `}

  @media (max-width: 991px) {
    background: #fff;
  }

  ${widthConstraint}
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    padding: 6px 20px;
    font-size: 16px;
    line-height: 16px;
    position: relative;
    display: inline-block;
    color: #fff;
    transition: all 0.2s;
  }
`;

export const HeaderNav = styled(Nav)`
${({ atTop }) => !atTop && "a { color: #111741; }"}
  display: none;

  [data-section]:before {
    position: absolute;
    content: '';
    width: 8px;
    height: 4px;
    background-color: #fff;
    left: 50%;
    margin-left: -2px;
    bottom: -4px;
    transition: all .3s ease-out 0s;
    opacity: 0;
  }

  [data-section="${({ currentSection }) => currentSection}"]:before {
    opacity: 1;
    ${({ atTop }) =>
      !atTop &&
      `
    
      background-color: #111741;
    `}  }

    @media (min-width: 992px) {
      display: block;
    }

    @media (max-width: 991px) {
      ${({ menuOpen }) =>
        menuOpen
          ? `
            ${ModalBack}
            display: flex;
            align-items: center;
            justify-content: center;

            ul {
              flex-direction: column;
              align-items: center;
            }

            a {
              color: #fff;
              margin-top: 8px;
            }

            [data-section]:before {
              background-color: #fff;
          }
      `
          : "display: none;"}
    }
`;

export const ModalClose = styled.button`
  height: 40px;
  width: 40px;
  background: transparent url("./icons/close-circle-outline-24px.svg") no-repeat
    center;
  background-size: cover;
  position: fixed;
  top: 20px;
  right: 20px;
  border: 0;
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const HeaderSideButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  display: block;
  width: 28px;
  height: 28px;
  margin-left: 8px;
  border: 0;
  background: url("./icons/menu-24px.svg") no-repeat center;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const JoinButton = styled.a`
  display: none;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  border-radius: 40px;
  font-size: 14px;
  line-height: 14px;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-duration: 0.3s;
  transition-property: transform;
  align-items: center;
  background: #eeaa35;
  color: #333;

  :after {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    transition-duration: 0.3s;
    transition-property: transform, opacity;
  }

  :hover {
    background: #111741;
    color: #fff;
    font-weight: 500;
    transform: translateY(-5px);
  }

  :hover img {
    fill: #fff;
    color: #fff;
    filter: brightness(0) invert(1);
  }

  :hover:after {
    opacity: 0.6;
    transform: translateY(5px);
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const Logo = styled.a`
  ${({ variant, height }) => `
    background-image: url("./images/logo-${variant["mobile"]}.png");
    height: ${height["mobile"]};

    @media (min-width: 992px) {
      background-image: url("./images/logo-${variant["desktop"]}.png");
      height: ${height["desktop"]};
    }
  `}

  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
`;

export const Hero = styled.section`
  height: calc(100vh + 84px);
  background: url("./images/herobg2.png") no-repeat;
  text-align: center;
`;

export const AboutSection = styled.section`
  strong {
    color: #7280da;
  }

  > p:nth-child(2) {
    max-width: 500px;
    margin: auto;
    color: #337859;
    text-align: center;
    margin-bottom: 60px;
  }
`;

export const HeroText = styled.p`
  max-width: 500px;
  margin: auto;
  color: #337859;
  text-align: center;
  margin-bottom: 60px;
`;

export const VideoButton = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  position: relative;
  margin-top: 50px;

  img {
    max-height: 520px;
    width: 100%;
    border-radius: 8px;
  }
`;

export const VideoModal = styled.div`
  ${ModalBack}
  ${({ videoOpen }) =>
    videoOpen
      ? `
    display: flex;
    align-items: center;
    justify-content: center;
`
      : "display: none;"}
`;

export const PlayIcon = styled.div`
@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}

color: #fff;
position: absolute;
z-index: 9;
top: 50%;
left: 50%;
display: block;
box-sizing: content-box;
width: 2.75rem;
height: 2.75rem;
padding: 1.125rem 1.25rem 1.125rem 1.75rem;
border-radius: 50%;
transform: translateX(-50%) translateY(-50%);

:before {
  content: "";
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    display: block;
    width: 4.75rem;
    height: 4.75rem;
    border-radius: 50%;
    background: #111741;
    animation: pulse-border 1500ms ease-out infinite;
    transform: translateX(-50%) translateY(-50%);
}

:after {
  content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    display: block;
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;
    background: #111741 url("./icons/play_arrow-24px.svg") no-repeat center;
    background-size: 60px;
    transition: all 200ms;
    transform: translateX(-50%) translateY(-50%);
}

}
`;

export const PricingSection = styled.section`
  background-color: #f8f9fa;
`;

export const Packages = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Package = styled.div`
  width: 100%;
  background-color: #fff;
  padding-top: 40px;
  margin-bottom: 100px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  cursor: pointer;

  ul {
    margin: 20px 0;
    padding: 0 20px;
    font-weight: 400;
    list-style: outside none none;
  }

  li {
    color: #404040;
    padding: 10px 5px;
    font-size: 16px;
  }

  :hover {
    transform: translateY(-20px);
    border: 1px solid #eeaa35;
  }

  :hover span,
  :hover h4 {
    color: #eeaa35;
  }

  hr {
    border: 0;
    height: 1px;
    background: #dfdfdf;
    margin: 50px 0;
  }

  @media (min-width: 768px) {
    max-width: calc(50% - 17px);

    :nth-child(odd) {
      margin-right: 30px;
    }
  }

  @media (min-width: 992px) {
    max-width: calc(25% - 25px);
    margin-right: 30px;

    :last-child {
      margin-right: 0;
    }
  }
`;

export const PackageHeader = styled.div`
  text-align: center;
`;

export const PackageIcon = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto 20px;

  :after {
    content: "";
    height: 100px;
    width: 100px;
    background: ${({ variant }) =>
        variant === "midnight"
          ? 'rgba(114, 128, 218, 0.35) url("./icons/speedometer-24px.svg")'
          : 'rgba(238, 170, 53, 0.25) url("./icons/rocket-24px.svg")'}
      center no-repeat;
    background-size: 50px;
    border-radius: 100px;
    position: absolute;
    fill: #111741;
    top: 0;
    left: 0;
  }

  :before {
    content: "";
    height: 75px;
    width: 75px;
    background: ${({ variant }) =>
      variant === "midnight"
        ? "rgba(114, 128, 218, 0.35)"
        : "rgba(238, 170, 53, 0.25)"};
    border-radius: 75px;
    position: absolute;
    top: 12%;
    left: 13%;
  }
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3em;
  margin: 25px;
  display: block;

  em {
    font-size: 32px;
    font-style: normal;
  }
`;

export const PackageButton = styled.a`
  max-width: 165px;
  margin: -75px auto 0;
  height: 45px;
  min-width: 140px;
  display: flex;
  justify-content: center;
  border-radius: 40px;
  font-size: 14px;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-duration: 0.3s;
  transition-property: transform;
  align-items: center;
  background: #fff;
  color: #333;
  border: 1px solid #dfdfdf;

  :after {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    transition-duration: 0.3s;
    transition-property: transform, opacity;
  }

  :hover {
    border: 1px solid #eeaa35;
    color: #111741;
    background: #eeaa35;
    font-weight: 500;
    transform: translateY(-5px);
  }

  :hover:after {
    opacity: 0.6;
    transform: translateY(5px);
  }
`;

export const AboutSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 15px;

  img {
    margin-top: 30px;
    display: inline-block;
  }

  @media (min-width: 768px) {
    div {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

export const AccordionContainer = styled.div`
  margin: 20px auto 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  animation-duration: 1500ms;
  animation-name: fadeInUp;

  ${({ active }) => active && `background: #c5e6d7;`}

  @media (min-width: 768px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`;

export const AccordionTitle = styled.h4`
    position: relative;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    padding: 15px 50px 25px 25px;
    margin: 0;

    :after {
      content:  url("./icons/arrow_${({ active }) =>
        active ? "upward" : "downward"}-24px.svg");
      position: absolute;
      right: 15px;
    }

    :hover {
      background: #c5e6d7;
    }
}
`;

export const AccordionContent = styled.div`
  padding: 0 25px 15px;
  display: none;
  ${({ active }) => active && `display: block;`}
`;

export const Footer = styled.footer`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  background: #eeaa35;

  hr {
    border: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
  }

  a {
    display: inline-block;
  }

  ${widthConstraint}
`;

export const JourneyBanner = styled.div`
  height: 50vh;
  background-image: url("./images/mangohero.png");
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  margin: 0 -5vw 80px;

  h1 {
    font-size: 40px;
  }
`;

export const JourneyText = styled.div`
  margin-bottom: 80px;

  img {
    max-width: 90vw;
  }

  @media (min-width: 768px) {
    img {
      float: right;
      margin: 30px 0 30px 10px;
      width: 50%;
    }
  }
`;

export const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TeamMember = styled.div`
  position: relative;

  > img {
    border-radius: 15px;
    width: 100%;
  }

  h3 {
    font-weight: 700;
    color: #323657;
    font-size: 22px;
    margin: 20px 0 0;
  }

  p {
    color: #7d7d7d;
    font-size: 18px;
    margin: 0 0 20px 0;
  }

  h3,
  p {
    transition: 0.6s;
    margin-left: 15px;
  }

  :hover h3,
  :hover p {
    margin-left: 15px;
  }

  a {
    position: absolute;
    left: 30px;
    top: 15px;
    right: 30px;
    bottom: 130px;
    background-color: rgba(114, 128, 218, 0.95);
    padding: 20px;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.7);
    transition: 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  :hover a {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }

  @media (min-width: 576px) {
    flex: 0 0 50%;
    max-width: calc(50% - 15px);
    padding-right: 15px;
  }

  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: calc(33.333333% - 15px);
  }
`;

export const FooterNav = styled(Nav)`
  margin-top: 18px;

  ul {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    li {
      width: 50%;
    }
  }
`;

export const Copyright = styled.p`
  color: #fff;
  padding: 20px 0;
`;

export const SocialLink = styled.a`
  padding: 15px;

  img {
    height: 30px;
    width: 30px;
  }
`;
