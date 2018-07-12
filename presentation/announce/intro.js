// Import React
import React from "react";
import styles from "../styles";

// Import Spectacle Core tags
import { Heading, Slide, Text, Link, Image, Layout, Fill } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
const images = {
  formidable: require("../../assets/aboutme/formidable-logo.svg"),
  formidableHero: require("../../assets/aboutme/formidableHero.jpg"),
  twitter: require("../../assets/aboutme/twitter.svg"),
  link: require("../../assets/aboutme/Link.svg")
};
preloader(images);

export default class AboutMe extends React.Component {
  render() {
    return (
      <Slide
        bgImage={images.formidableHero}
        bgColor="#070707"
        bgDarken={0.1}
        style={{ width: "100%", position: "relative" }}
      >
        <Heading style={styles.littleSpacePlease} textColor="red">It does now.</Heading>

        <Heading fit textColor="links">eslint-plugin-react-native-a11y</Heading>

        <Text textColor="primary" style={[styles.extraSmallText, styles.spacePlease]}>
          Thank you, {" "}
          <Link
            textColor="links"
            style={[styles.links, styles.extraSmallText, styles.littleSpacePlease]}
            href="https://twitter.com/AlexJRsaunders"
          >
            @AlexJRsaunders
          </Link>
        </Text>
      </Slide>
    );
  }
}
