// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide } from "spectacle";

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
      <Slide bgColor="#070707" style={{ width: "100%", position: "relative" }}>
        <Heading fit textColor="quartenary">VoiceOver in iOS</Heading>
        <hr textfont="secondary" style={{ width: "100%" }} />
        <Heading fit textColor="quartenary">TalkBack in Android</Heading>
      </Slide>
    );
  }
}
