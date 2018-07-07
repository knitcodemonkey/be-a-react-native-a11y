// Import React
import React from "react";
import styles from "../styles";

// Import Spectacle Core tags
import { Heading, Slide, Text, Link, Image, Fill } from "spectacle";

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
        <Image src={images.formidable} style={{ width: "100%" }} />

        <Text
          textColor="red"
          style={[styles.littleSpacePlease, styles.standardText]}
        >
          is pleased to announce...
        </Text>

        <Heading style={{ paddingTop: "5px" }}fit textColor="links">eslint-plugin-react-native-a11y</Heading>

      </Slide>
    );
  }
}
