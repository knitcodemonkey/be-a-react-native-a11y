// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Link } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";

// Require CSS
import "normalize.css";
const images = {
  accessibilityGif: require("../../assets/aboutA11y/AccessibilityGif.gif")
};
preloader(images);

export default class A11yIntro extends React.Component {
  render() {
    return (
      <Slide bgColor="#070707" style={{ width: "100%", position: "relative" }}>
        <Heading size={3} textColor="red" style={styles.littleSpacePlease}>
          What does Accessibility look like in React Native?
        </Heading>

        <Link
          textColor="links"
          style={[styles.links, styles.extraSmallText, styles.littleSpacePlease]}
          href="https://facebook.github.io/react-native/docs/accessibility"
        >
            React Native Docs: Accessibility
        </Link>
      </Slide>
    );
  }
}
