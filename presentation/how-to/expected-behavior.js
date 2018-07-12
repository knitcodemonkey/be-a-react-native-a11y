// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, Notes } from "spectacle";

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
        <Notes>Innovation is great, but not at the expense of accessibility. iOS has the Human Interface Guidelines and Android has Material Design. </Notes>
        <Heading size={3} textColor="red">
          Expected Behavior
        </Heading>
        <hr textfont="secondary" style={{ width: "100%" }} />

        <Text
          style={[styles.standardText, styles.littleSpacePlease]}
          textColor="quartenary"
        >Following expected behavior guidelines makes it easy for users to navigate through your app</Text>
      </Slide>
    );
  }
}
