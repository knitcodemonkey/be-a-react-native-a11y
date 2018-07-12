// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, Image } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";

// Require CSS
import "normalize.css";
const images = {
  allowFontScaling: require("../../assets/how-to/allowFontScaling.png"),
  mobileDevices: require("../../assets/backgrounds/mobileDevices.jpg")
};
preloader(images);

export default class A11yIntro extends React.Component {
  render() {
    return (
      <Slide bgImage={images.mobileDevices}
        bgDarken={0.7}
        bgColor="#070707"
        style={{ width: "100%", position: "relative" }}
      >
        <Heading size={3} textColor="red">
          Accessible Defaults
        </Heading>
        <hr textfont="secondary" style={{ width: "100%" }} />
        <Text
          style={[styles.smallText]}
          textColor="quartenary"
        >
        allowFontScaling defaults to true
        </Text>
      </Slide>
    );
  }
}
