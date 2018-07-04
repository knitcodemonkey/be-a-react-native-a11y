import React from "react";
import { Slide, Text, Notes } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../assets/backgrounds/access-wheelchair.jpg"),
  JenniferVan: require("../../assets/JenniferVan.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class WhyBusiness extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.8}>
        <Notes>
          <p>So, what is disability?</p>
        </Notes>

        <Text
          textColor="primary"
          style={[styles.largeText, styles.littleSpacePlease]}
        >
          World Health Organization:<br />
          1 in 5 people are disabled
        </Text>
        <Text
          textColor="green"
          style={[styles.standardText, styles.littleSpacePlease]}
        >
          20% more engagement ≈ 20% more money
        </Text>

        <Text
          textColor="green"
          style={[styles.standardText, styles.littleSpacePlease]}
        />
      </Slide>
    );
  }
}
