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

// Import Spectacle Core tags
import {
  Deck,
  Fill,
  Heading,
  Layout,
  Link,
  Notes,
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
        <Slide bgColor="faded" bgImage={images.JenDevDesk} bgDarken={0.7}>
          <Notes>
            As speakers, we do our best, but sometimes slides are just too
            difficult to read. You can follow along at
            be-a-react-native-a11y.surge.sh
          </Notes>
          <Layout style={styles.flexCol}>
            <Fill style={styles.spacePlease}>
              <Heading
                fit
                textColor="primary"
                style={{ textShadow: "1px 1px 6px #111" }}
              >
                Be a React Native A11y
              </Heading>
            </Fill>
            <Fill style={styles.spacePlease}>
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

        {/* Conclusion */}
        <Slide
          bgColor="#070707"
          style={{ width: "100%", position: "relative" }}
        >
          <Heading
            size={2}
            textColor="dktertiary"
            style={styles.littleSpacePlease}
          >
            Accessibility isn't for just a select few.
          </Heading>
          <Heading
            size={2}
            textColor="dktertiary"
            style={styles.littleSpacePlease}
          >
            It's for everybody.
          </Heading>
          <Heading
            size={2}
            textColor="green"
            style={[styles.littleSpacePlease, { fontStyle: "italic" }]}
          >
            It's for you.
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
