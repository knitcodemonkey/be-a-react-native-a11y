// Import React
import React from "react";
import styles from "../styles";

// Import Spectacle Core tags
import { Heading, Slide, Text, Link, Image } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
const images = {
  formidable: require("../../assets/aboutme/formidable-logo.svg"),
  formidableHero: require("../../assets/aboutme/formidableHero.jpg")
};
preloader(images);

export default class AboutMe extends React.Component {
  render() {
    return (
      <Slide bgImage={images.formidableHero} bgColor="#000000" style={{ width: "100%", position: "relative" }}>
        <Image src={images.formidable} style={{ width: "100%" }} />
        <Heading style={{ textAlign: "right", fontSize: "0.78em", marginTop: "-20px" }}>
          THE JAVASCRIPT CONSULTANCY TRUSTED BY ENGINEERS
        </Heading>

        <Text textColor="primary" style={[styles.spacePlease, styles.smallText]}>
          Seattle and London-based engineering consultancy. Open source software organization, specializing in React.js,
          React Native, GraphQL, Node.js, and the extended JavaScript ecosystem.
        </Text>

        <Link
          textColor="dktertiary"
          style={[{ zIndex: 10, position: "relative" }, styles.smallText]}
          href="https://twitter.com/FormidableLabs"
        >
          Formidable.com | @FormidableLabs
        </Link>
      </Slide>
    );
  }
}
