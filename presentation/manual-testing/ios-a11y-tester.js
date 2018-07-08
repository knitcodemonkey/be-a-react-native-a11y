// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, ListItem, List, Text, Notes, Link } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";

// Require CSS
import "normalize.css";
const images = {
  mobileDevices: require("../../assets/backgrounds/mobileDevices.jpg")
};
preloader(images);

export default class A11yIntro extends React.Component {
  render() {
    return (
      <Slide
        bgImage={images.mobileDevices}
        bgDarken={0.7}
        bgColor="#070707"
        style={{ width: "100%", position: "relative" }}
      >
        <Notes>
          <ul>
            <li>Intro to the Accessibility Inspector Tool for iOS Native Apps By Chris McMeeking</li>
          </ul>
        </Notes>
        <Heading fit textColor="red" fit>iOS Accessibility Inspector</Heading>
        <Text>Use mouse to navigate as if VoiceOver is on, and run accessibility audits on a page.</Text>
        <List>
          <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>Bring up Xcode.</ListItem>
          <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>Navigate to the Open Developer Tool.</ListItem>
          <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>Start the Accessibility Inspector.</ListItem>
          <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>Bring up the simulator with the application running</ListItem>
        </List>

        <Link
          textColor="links"
          style={[styles.links, styles.extraSmallText, styles.littleSpacePlease]}
          href="https://www.deque.com/blog/intro-accessibility-inspector-tool-ios-native-apps/"
        >
            Intro to the Accessibility Inspector Tool for iOS Native Apps by @chriscm2006
        </Link>

      </Slide>
    );
  }
}
