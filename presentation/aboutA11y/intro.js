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
  accessibilityGif: require("../../assets/AccessibilityGif.gif")
};
preloader(images);

export default class A11yIntro extends React.Component {
  render() {
    return (
      <Slide bgColor="#070707" style={{ width: "100%", position: "relative" }}>
        <Heading
          textColor="quartenary"
          style={{
            marginBottom: -70
          }}
        >
          Accessibility
        </Heading>
        <Image
          src={images.accessibilityGif}
          style={{
            width: "100%",
            marginBottom: -70,
            zIndex: -1,
            position: "relative"
          }}
        />
        <Link
          textColor="links"
          style={styles.links}
          href="https://www.microsoft.com/en-us/design/inclusive"
        >
          Image Credit: Inclusive Design at Microsoft
        </Link>
      </Slide>
    );
  }
}
