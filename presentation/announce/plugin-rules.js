// Import React
import React from "react";
import styles from "../styles";

// Import Spectacle Core tags
import { Heading, Slide, Text, Link, Image, Fill, Code } from "spectacle";

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
        <Heading fit style={styles.littleSpacePlease} textColor="red">eslint-plugin-react-native-a11y</Heading>

        <Code textColor="primary" style={[styles.littleSpacePlease, styles.extraSmallText]} >npm install --save-dev eslint-plugin-react-native-a11y</Code>


      </Slide>
    );
  }
}
