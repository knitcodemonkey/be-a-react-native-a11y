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
      <Slide
        bgColor="#070707"
        style={{ width: "100%", position: "relative" }}
        bgImage={images.mobileDevices}
        bgDarken={0.7}
      >
        <Heading size={3} textColor="primary" style={styles.littleSpacePlease}>Are there any<br/> a11y linting resources<br /> for React Native?</Heading>
        <Heading textColor="red" style={styles.littleSpacePlease}>No?</Heading>
      </Slide>
    );
  }
}
