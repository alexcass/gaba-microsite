import React, { useState, useEffect, useRef } from "react";
import {
  LandingPage,
  Header,
  Footer,
  Logo,
  Hero,
  HeaderNav,
  ModalClose,
  HeaderSideButtons,
  JoinButton,
  MenuButton,
  PageTitle,
  LineAnimation,
  CircleAnimation,
  HeroText,
  VideoButton,
  PlayIcon,
  VideoModal,
  PricingSection,
  Price,
  Package,
  PackageHeader,
  PackageIcon,
  PackageButton,
  Packages,
  AboutSection,
  AboutSections,
  AccordionContainer,
  AccordionTitle,
  AccordionContent,
  JourneyBanner,
  JourneyText,
  Team,
  TeamMember,
  FooterNav,
  Copyright,
  SocialLink,
} from "./App.styles.js";
import Typed from "typed.js";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { id: "home", name: "Home" },
    { id: "how-it-works", name: "How it Works" },
    { id: "pricing", name: "Pricing" },
    { id: "journey", name: "Our Jouney" },
    { id: "faq", name: "FAQs" },
  ];
  const [isScrolling, setIsScrolling] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const typeContainer = useRef(null);

  // todo: add debouncer
  const handleScroll = () =>
    setIsScrolling(
      document.querySelector("body").getBoundingClientRect().top <= -84
    );

  const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
      <AccordionContainer active={isOpen}>
        <AccordionTitle active={isOpen} onClick={() => setOpen(!isOpen)}>
          {title}
        </AccordionTitle>
        <AccordionContent active={isOpen}>{children}</AccordionContent>
      </AccordionContainer>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const typedOptions = {
      strings: [
        "No Resource Overload",
        "Work Smarter not Harder",
        "Save Time and Money",
      ],
      typeSpeed: 30,
      startDelay: 1200,
      backSpeed: 20,
      backDelay: 500,
      loop: true,
      loopCount: 5,
      showCursor: false,
    };
    new Typed(typeContainer.current, typedOptions);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <LandingPage id="home" currentSection={currentSection}>
      <Header
        atTop={!isScrolling}
        forceBackground={currentSection === "journey"}
      >
        <Logo
          href="/"
          variant={{ mobile: "midnight", desktop: "mango" }}
          height={{ mobile: "24px", desktop: "36px" }}
        />
        <HeaderNav
          menuOpen={menuOpen}
          currentSection={currentSection}
          atTop={!isScrolling}
        >
          <ModalClose show={menuOpen} onClick={() => setMenuOpen(false)} />
          <ul>
            {navLinks.map(({ name, id }) => (
              <li>
                <a
                  href={`#${id}`}
                  onClick={() => {
                    setCurrentSection(id);
                    setMenuOpen(false);
                  }}
                  data-section={id}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </HeaderNav>
        <HeaderSideButtons>
          <JoinButton href="http://gogaba.rurl.me/Join" target="_blank">
            Join GABA &nbsp;
            <img src="./icons/arrow_forward-24px.svg" width="20px" alt="" />
          </JoinButton>
          <MenuButton onClick={() => setMenuOpen(true)} />
        </HeaderSideButtons>
      </Header>
      <Hero id="hero">
        <PageTitle>
          GABA Means <span ref={typeContainer}></span>
        </PageTitle>
        <LineAnimation>
          {new Array(5)
            .fill(0)
            .map((line) => (
              <div />
            ))}
        </LineAnimation>
        <CircleAnimation>
          {new Array(5)
            .fill(0)
            .map((circle) => (
              <div />
            ))}
        </CircleAnimation>
        <img src="./images/herov2.png" alt="" />
      </Hero>
      <AboutSection id="about">
        <h2>About GABA</h2>
        <HeroText>
          GABA is the first verified community for medical students and
          graduates of medical school. We offer reviews on educational
          resources, schools, and personalized career development.
        </HeroText>
        <AboutSections>
          <div>
            <img src="./images/firstYear3.png" alt="" />
          </div>
          <div>
            <h3>First Year Medical Student</h3>
            <p>
              “The hardest part of being in medical school is getting adjusted
              to the workload, being that I was freshly out of undergrad,
              without any formal study plan/strategy.” – Rebecca, MS1*
            </p>
            <p>
              Congratulations on your acceptance! Get started on the right foot
              by joining our <strong>community of veteran students</strong> who
              have already offered{" "}
              <strong>reviews of educational resources</strong>reviews of
              educational resources.
            </p>
          </div>
          <div>
            <h3>Second Year Medical Student</h3>
            <p>
              “There are so many resources that [it] can be overwhelming to go
              through, so having something that narrows it down is helpful.” –
              James, MS2*
            </p>
            <p>
              You made it through first year! Let’s get you prepared to excel
              this year and perform well on USMLE Step 1 with our{" "}
              <strong>reviews of educational resources</strong>reviews of
              educational resources and <strong>career development</strong>
              career development.
            </p>
          </div>
          <div>
            <img src="./images/secondYear.png" alt="" />
          </div>
          <div>
            <img src="./images/thirdYear.png" alt="" />
          </div>
          <div>
            <h3>Third Year Medical Student</h3>
            <p>
              “I wanted a way to keep those anecdotes or stories, for example
              patient encounters that were particularly impactful and that might
              be helpful in my personal statement” – Benjamin. MS3*
            </p>
            <p>
              Can you see the finish line? We can! Finish strong through STEP 2
              with our <strong>reviews of educational resources</strong>reviews
              of educational resources, get started building your ERAS early
              with your <strong>personalized GABA profile</strong>personalized
              GABA profile, and plan your rotations with{" "}
              <strong>program reviews</strong>.
            </p>
          </div>
          <div>
            <h3>Fourth Year Medical Student</h3>
            <p>
              “Because of COVID I knew I wouldn’t be able to visit the school
              personally so I was looking through the spreadsheets and I kept
              seeing people saying their review had been deleted. That’s when I
              realized I needed a more reliable source of information for what
              could be the next 5 years of my life” – Janet, MS4*
            </p>
            <p>
              Can you believe that you’re going to be a doctor in one year!?
              Start building your ERAS early with your{" "}
              <strong>personalized GABA profile</strong>. Plan for residency
              with our <strong>database of applicant data</strong>database of
              applicant data and <strong>program reviews</strong>.
            </p>
          </div>
          <div>
            <img src="./images/fourthYear.png" alt="" />
          </div>
        </AboutSections>
      </AboutSection>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <VideoButton onClick={() => setVideoOpen(true)}>
          <img src="./images/welcome.png" alt="" />
          <PlayIcon />
        </VideoButton>
        <VideoModal videoOpen={videoOpen}>
          <ModalClose show={videoOpen} onClick={() => setVideoOpen(false)} />
          <iframe
            title="How it Works Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YbFtpUooQfs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </VideoModal>
      </section>
      <PricingSection id="pricing">
        <h2>Pricing</h2>
        <Packages>
          <Package>
            <PackageHeader>
              <PackageIcon variant="midnight" />
              <h3>Pre-Med</h3>
              <Price>
                $ <em>25</em> per month
              </Price>
              <Price>Billed Anually</Price>
            </PackageHeader>
            <hr />
            <PackageButton
              href="https://share.hsforms.com/16SOCx9XrSpeQHLmvRwkQhA4olac"
              target="_blank"
            >
              Contact Us &nbsp;
              <img src="./icons/mail_outline-24px.svg" width="14px" alt="" />
            </PackageButton>
            <ul>
              <li>Digital Portfolio</li>
              <li>CV / Resume Generator</li>
              <li>Learning Assessments</li>
              <li>Mentor Network</li>
              <li>Bi-Weekly Coaching</li>
            </ul>
          </Package>
          <Package>
            <PackageHeader>
              <PackageIcon />
              <h3>Bronze</h3>
              <Price>
                <em>Free</em>
              </Price>
              <Price>Forever</Price>
            </PackageHeader>
            <hr />
            <PackageButton href="http://gogaba.rurl.me/Join" target="_blank">
              Join GABA&nbsp;
              <img src="./icons/arrow_forward-24px.svg" width="14px" alt="" />
            </PackageButton>
            <ul>
              <li>Digital Portfolio</li>
              <li>Learning Assessments</li>
            </ul>
          </Package>
          <Package>
            <PackageHeader>
              <PackageIcon />
              <h3>Silver</h3>
              <Price>
                $ <em>15</em> per month
              </Price>
              <Price>Billed Annually</Price>
            </PackageHeader>
            <hr />
            <PackageButton
              href="https://share.hsforms.com/16SOCx9XrSpeQHLmvRwkQhA4olac"
              target="_blank"
            >
              Contact Us &nbsp;
              <img src="./icons/mail_outline-24px.svg" width="14px" alt="" />
            </PackageButton>
            <ul>
              <li>Digital Portfolio</li>
              <li>CV / Resume Generator</li>
              <li>Learning Assessments</li>
              <li>Residency Applicant Databasek</li>
              <li>Rotation / Residency Reviews</li>
            </ul>
          </Package>
          <Package>
            <PackageHeader>
              <PackageIcon />
              <h3>Gold</h3>
              <Price>
                $ <em>25</em> per month
              </Price>
              <Price>Billed Annually</Price>
            </PackageHeader>
            <hr />
            <PackageButton
              href="https://share.hsforms.com/16SOCx9XrSpeQHLmvRwkQhA4olac"
              target="_blank"
            >
              Contact Us &nbsp;
              <img src="./icons/mail_outline-24px.svg" width="14px" alt="" />
            </PackageButton>
            <ul>
              <li>Digital Portfolio</li>
              <li>CV / Resume Generator</li>
              <li>Learning Assessments</li>
              <li>Residency Applicant Databasek</li>
              <li>Rotation / Residency Reviews</li>
              <li>One on One Coaching</li>
            </ul>
          </Package>
        </Packages>
      </PricingSection>
      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion title="How do I become a member?">
          <p>Easy! Click the button “Join GABA”</p>
          <p>
            You will be asked for your email address and to upload a document
            verifying you are a medical student or medical school graduate. This
            can be a letter of acceptance, unofficial transcript, or enrollment
            verification letter from your school’s registrar.
          </p>
          <p>
            Your membership will be verified in 24-48 hours and you will receive
            your access key via the email you used to register.
          </p>
        </Accordion>
        <Accordion
          title="Do I have to be a member to leave a review or submit my applicant
            data?"
        >
          <p>
            You don’t have to be a member to share your insights! We recommend
            that you join to gain access to the insights of the GABA community.
            Access to applicant data and residency program reviews are
            completely free to all GABA members!
          </p>
        </Accordion>
        <Accordion title="Is my document, email address, and/or name ever shared with anyone?">
          <p>
            Never. Your information is never shared. It is exclusively used to
            verify that you are a medical student or medical school graduate.
          </p>
        </Accordion>
        <Accordion title="How do I get added to the list for a Silver or Gold membership?">
          <p>
            We are currently selecting the GABA members that will receive
            priority access to these memberships. If you are interested in
            upgrading for a lifetime 50% discount please contact us as
          </p>
        </Accordion>
      </section>
      <section id="journey">
        <JourneyBanner>
          <h1>Our Journey</h1>
        </JourneyBanner>
        <div>
          <h3>The Beginning</h3>
          <JourneyText>
            <img src="./images/beginning.png" alt="" />
            <div>
              <p>
                GABA was founded by medical students for medical students. Like
                you, we started our personal medical journeys ready to excel. We
                quickly discovered that, aside from grit and determination,
                success in medical school was often a matter of having the right
                information at the right time. That’s when GABA was born.
              </p>
              <p>
                Rather than spending hours pouring over multiple sites for
                recommended resources, school reviews, and applicant data from
                questionable sources, we decided to create a community for the
                unique experience of being a medical student. GABA filters out
                the noise and gives our members back the most precious resource
                in a medical student's arsenal: Time.
              </p>
            </div>
          </JourneyText>
          <div>
            <h2>Meet the Team</h2>
            <HeroText>
              Our team has over 6 years of experience working with medical
              students at risk of failing or underperforming on exams. We
              emphasize design solutions that enhance medical education and
              student experience.
            </HeroText>
            <Team>
              <TeamMember>
                <img src="./images/team/candice.jpg" alt="" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/candiceblacknall/"
                >
                  <img src="./icons/linkedin.svg" alt="" />
                </a>
                <h3>Candice Blacknall, MD MBA</h3>
                <p>Founder</p>
              </TeamMember>
              <TeamMember>
                <img src="./images/team/julia.jpg" alt="" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/jchristwork"
                >
                  <img src="./icons/linkedin.svg" alt="" />
                </a>
                <h3>Julia Christian</h3>
                <p>Chief Experience Officer</p>
              </TeamMember>
              <TeamMember>
                <img src="./images/team/chima2.jpg" alt="" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/chima-odinkemere/"
                >
                  <img src="./icons/linkedin.svg" alt="" />
                </a>
                <h3>Chima Odinkemere, MD MBA</h3>
                <p>Founder</p>
              </TeamMember>
              <TeamMember>
                <img src="./images/team/sam.png" alt="" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/sam-ashlee/"
                >
                  <img src="./icons/linkedin.svg" alt="" />
                </a>
                <h3>Sam Ashlee, PhD</h3>
                <p>Director Of Corporate Outreach</p>
              </TeamMember>
              <TeamMember>
                <img src="./images/team/jacq.jpg" alt="" />
                <h3>Jacquereh Jolly</h3>
                <p>Marketing Assistant</p>
              </TeamMember>
              <TeamMember>
                <img src="./images/team/luke3.jpg" alt="" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/LongNguyen1012"
                >
                  <img src="./icons/github.svg" alt="" />
                </a>
                <h3>Sam Ashlee, PhD</h3>
                <p>Director Of Corporate Outreach</p>
              </TeamMember>
            </Team>
          </div>
        </div>
      </section>
      <Footer>
        <Logo
          href="/"
          variant={{ mobile: "midnight", desktop: "midnight" }}
          height={{ mobile: "46px", desktop: "46px" }}
        />
        <p>
          The first verified community for medical students and graduates of
          medical school. We offer reviews on educational resources, schools,
          and personalized career development.
        </p>
        <hr />
        <FooterNav>
          <ul>
            {navLinks.map(({ name, id }) => (
              <li>
                <a href={`#${id}`} onClick={() => setCurrentSection(id)}>
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:info@gogaba.co">Contact Us</a>
            </li>
          </ul>
        </FooterNav>
        <Copyright>
          2020 © <strong>GABA Inc.</strong>
        </Copyright>
        <div>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/company/gogabaco/"
          >
            <img src="./icons/linkedin.svg" width="14px" alt="" />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/goGABAco"
          >
            <img src="./icons/twitter.svg" width="14px" alt="" />
          </SocialLink>
        </div>
      </Footer>
    </LandingPage>
  );
}

export default App;
