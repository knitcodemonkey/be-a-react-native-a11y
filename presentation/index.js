// Import React
import React, { Component } from "react";
import { AboutMe, Formidable } from "./aboutme";
import {
  A11yIntro,
  WhatIsA11y,
  WhatIsDisability,
  TypesOfDisability,
  Why,
  WhyBusiness1,
  WhyBusiness2,
  WhyBusiness3
} from "./aboutA11y";
import { RNBasics, ExpectedBehavior, AlreadyDone, A11yOptions, AccessibleTrue, A11yTraits, VisibilityHidden, AccessibilityTap, A11yLiveRegion } from "./how-to";
import { ManualIntro, ScreenReaders } from "./manual-testing";
import { AutomatedIntro, A11yLint, A11yTestingSuites, IosInspector, AndroidScanner } from "./automated-testing";
import { AnnounceIntro, PluginRules } from "./announce";

import Resources from "./resources.js";
import "prismjs/components/prism-powershell";

// Import Spectacle Core tags
import {
  Deck,
  Fill,
  Heading,
  Layout,
  Link,
  Notes,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import styles from "./styles";
const images = {
  JenDevDesk: require("../assets/aboutme/JensDesk.jpg"),
  beKind: require("../assets/beKind.png")
};
preloader(images);

// Require CSS
require("normalize.css");

const themeColors = {
  primary: "#fff",
  secondary: "#191919",
  red: "#FF4E33",
  green: "#2FC12F",
  links: "deepskyblue",
  dktertiary: "#FF4E33",
  quartenary: "#FAFAFA",
  faded: "#bbb",
  background: "linear-gradient(#F8FAFA, #D8DADA)"
};

const theme = createTheme(themeColors, {
  primary: "Raleway"
});

const slideUrl = "https://be-a-react-native-a11y.surge.sh";
export default class Presentation extends Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        {/* Title Screen */}
        <Slide bgColor="faded" bgImage={images.JenDevDesk} bgDarken={0.85}>
          <Notes>
            As speakers, we do our best, but sometimes slides are just too
            difficult to read. You can follow along at
            be-a-react-native-a11y.surge.sh
          </Notes>
          <Layout style={styles.flexCol}>
            <Fill style={styles.littleSpacePlease}>
              <Heading
                fit
                textColor="red"
                style={{ textShadow: "1px 1px 6px #111" }}
              >
                Be a React Native A11y
              </Heading>
            </Fill>
            <Fill style={styles.littleSpacePlease}>
              <Text
                textColor="primary"
                style={[
                  styles.smallText,
                  { display: "inline-block", marginRight: 10 }
                ]}
              >
                Follow along with the slides:
              </Text>
              <Link textColor="links" style={styles.links} href={slideUrl}>
                {slideUrl}
              </Link>
            </Fill>
          </Layout>
        </Slide>

        {/* About Me Slides */}
        <AboutMe slideUrl={slideUrl} />
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

        {/* Accessibility Code */}
        <RNBasics />

        {/* Manual Testing */}
        <ManualIntro />
        <ScreenReaders />

        {/* Accessibility Code */}
        <ExpectedBehavior />
        <AlreadyDone/>
        <A11yOptions />
        <AccessibleTrue />
        <A11yTraits />
        <VisibilityHidden />
        <AccessibilityTap />
        <A11yLiveRegion />

        {/* Automated Testing */}
        <AutomatedIntro />
        <A11yTestingSuites />
        <IosInspector />
        <AndroidScanner />
        <A11yLint />

        {/* Introduce eslint-plugin-react-native-a11y */}
        <AnnounceIntro />
        <PluginRules />

        {/* Conclusion */}
        <Slide>
          <Notes>
						Above all, remember that everyone you know is fighting
						Javascript. Let's do what we can to make it a little
						easier for everyone. Thank you.
          </Notes>
          <Layout style={{ display: "block" }}>
            <Fill
              style={{
                width: "100%",
                height: "100%",
                position: "relative"
              }}
            >
              <Image
                src={images.beKind}
                style={{
                  maxWidth: "60vw",
                  maxHeight: "60vh",
                  width: "auto",
                  margin: "0 auto"
                }}
              />
            </Fill>
          </Layout>
        </Slide>

        <Resources />
      </Deck>
    );
  }
}
