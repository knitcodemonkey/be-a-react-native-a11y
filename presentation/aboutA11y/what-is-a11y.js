// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, Notes, Link, Cite } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../assets/backgrounds/access-wheelchair.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class What extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.8}>
        <Notes>
          <p>What is A11y, anyway?</p>
          <p>
            When we think of Accessibility features, we focus too much on those
            whose experiences are permanent. Though it is important to remember
            them, they aren't the only ones who need those features.
          </p>
        </Notes>
        <Heading
          size={2}
          textColor="dktertiary"
          style={{ textShadow: "1px 1px 6px #222" }}
        >
          What is Accessibility?
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Text
          textColor="faded"
          style={[styles.spacePlease, styles.standardText]}
        >
          People with disabilities can{" "}
          <Text
            textColor="primary"
            style={[styles.standardText, { fontStyle: "italic" }]}
          >
            perceive, understand, navigate, and interact
          </Text>{" "}
          with websites and tools, and they can{" "}
          <Text
            textColor="primary"
            style={[styles.standardText, { fontStyle: "italic" }]}
          >
            contribute equally without barriers.
          </Text>
        </Text>
        <Cite>
          <Link
            textColor="links"
            style={styles.links}
            href="https://www.w3.org/WAI/intro/usable"
          >
            W3C - Web Accessibility Initiative
          </Link>
        </Cite>
      </Slide>
    );
  }
}
