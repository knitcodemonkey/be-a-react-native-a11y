// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text } from "spectacle";

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
        <Heading fit textColor="red">
        accessibilityLiveRegion (Android)
        </Heading>
        <hr textfont="secondary" style={{ width: "100%" }} />
        <Text
          style={[styles.standardText, styles.littleSpacePlease]}
          textColor="quartenary"
        >
        When components dynamically change, we want TalkBack to alert the end user.
        </Text>
        <Text
          style={[styles.standardText, styles.littleSpacePlease]}
          textColor="quartenary"
        >
        Options: none, polite, assertive
        </Text>
      </Slide>
    );
  }
}
