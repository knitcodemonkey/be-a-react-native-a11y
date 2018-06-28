// Import React
import React from "react";
import { AboutMe, Formidable } from "./aboutme";
import { A11yIntro, WhatIsA11y, WhatIsDisability, TypesOfDisability, Why, WhyBusiness1, WhyBusiness2, WhyBusiness3 } from "./aboutA11y";
import { GettingStartedIntro, Axe, DesignTools, DevTools } from "./gettingStarted";
import { TestYourSiteIntro } from "./testYourSite";
import { BreakdownIntro, Checklists, StartNow, ByComponent, ByPage } from "./breakdown";
import { RealWorldApplication, ButtonLinkDiv, DesignAffectsCodeCheckbox, DesignAffectsCodeMultiselect } from "./a11yDecisions";
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Layout,
  Link,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import styles from "./styles";
const images = {
  JenDevDesk: require("../assets/aboutme/JensDesk.jpg"),
  JenDeskColor: require("../assets/aboutme/JensDeskColor.jpg")

};
preloader(images);

// Require CSS
require("normalize.css");

const themeColors = {
  primary: "#FAFAFA",
  secondary: "#191919",
  tertiary: "#981804",
  dktertiary: "deepskyblue",
  quartenary: "#FAFAFA",
  faded: "#CCCCCC",
  background: "linear-gradient(#F8FAFA, #D8DADA)"
};

const theme = createTheme(themeColors, {
  primary: "Raleway"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {/* Title Screen */}
        <Slide
          bgColor="faded"
          bgImage={images.JenDevDesk}
          bgDarken={0.7}
        >
          <Notes>
						As speakers, we do our best, but sometimes slides are
						just too difficult to read. You can follow along at
						a11y-sprint-filler.surge.sh
          </Notes>
          <Layout style={styles.flexCol}>
            <Fill style={styles.spacePlease}>
              <Heading
                caps
                size={1}
                textColor="primary"
                style={{ textShadow: "1px 1px" + " 6px #111" }}
              >
								Accessibility
              </Heading>
              <Heading
                margin="10px 0 0"
                textColor="dktertiary"
                size={3}
                bold
                style={{ textShadow: "1px 1px" + " 6px #111" }}
              >
								the sprint-filler way
              </Heading>
            </Fill>
            <Fill style={styles.spacePlease}>
              <Link
                textColor="dktertiary"
                style={styles.smallText}
                href="http://a11y-sprint-filler.surge.sh"
              >
								Follow along with the slides:
								http://a11y-sprint-filler.surge.sh
              </Link>
              {/* <br />
							<Link
								textColor="dktertiary"
								style={styles.smallText}
								href="https://youtu.be/1H8TO1fVuLY"
							>
								Video is available on YouTube:
								https://youtu.be/1H8TO1fVuLY
							</Link> */}
            </Fill>
          </Layout>
        </Slide>

        {/* About Me Slides */}
        <AboutMe />
        <Formidable />

        {/* 5 W's of Accessibility */}
        <A11yIntro />
        <WhatIsA11y />
        <WhatIsDisability />
        <TypesOfDisability />
        <Why />
        <WhyBusiness1 />
        <WhyBusiness2 />
        <WhyBusiness3 />

        {/* How do we get started? */}
        <GettingStartedIntro />
        <Axe />
        <DesignTools />
        <DevTools />

        {/* Test Your Site */}
        <TestYourSiteIntro />

        {/* That seems like a lot. How do we break it down? */}
        <BreakdownIntro />
        <Checklists />
        <StartNow />
        <ByComponent />
        <ByPage />

        {/* How design affects code affects accessibility */}
        <RealWorldApplication />
        <ButtonLinkDiv />
        <DesignAffectsCodeCheckbox />
				<DesignAffectsCodeMultiselect />

        {/* Conclusion */}
				<Slide
				bgColor="#000000"
        style={{ width: "100%", position: "relative" }}>
					<Text textColor="dktertiary" style={[styles.largeText, styles.littleSpacePlease]}>
						Accessibility isn't for just a select few. It's for everybody. It's for you.
					</Text>
					<Heading size={2} textColor="primary" style={styles.littleSpacePlease}>
						Thank you
					</Heading>
				</Slide>
      </Deck>
    );
  }
}
