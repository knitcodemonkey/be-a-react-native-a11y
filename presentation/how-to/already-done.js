// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Link, Image } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";

// Require CSS
import "normalize.css";
const images = {
  allowFontScaling: require("../../assets/how-to/allowFontScaling.png")
};
preloader(images);

export default class A11yIntro extends React.Component {
  render() {
    return (
      <Slide bgColor="#070707" style={{ width: "100%", position: "relative" }}>
        <Heading size={4} textColor="red">
          Thanks, React Native,
        </Heading>
        <Heading size={3} textColor="red">
          for accessible defaults
        </Heading>
        <Image src={images.allowFontScaling} style={[styles.littleSpacePlease, { width: "60%" }]} />

      </Slide>
    );
  }
}
