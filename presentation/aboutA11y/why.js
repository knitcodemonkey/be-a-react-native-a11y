// Import React
import React from "react";

// Import Spectacle Core tags
import { Cite, Slide, Notes, Heading, Fill, Text, Link } from "spectacle";

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
const meStyles = {
  ...styles,
  BlockQuote: {},
  Quote: {}
};

export default class Why extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.8}>
        <Notes>
          <p>
            Imagine for a moment that subtitles, zooming, large buttons, color
            contrast and keyboard shortcuts didn't exist. Could you have
            interacted with that technology?
          </p>
          <p>
            When we think of Accessibility features, we focus too much on those
            whose experiences are permanent. Though it is important to remember
            them, they aren't the only ones who need those features.
          </p>
        </Notes>
        <Fill>
          <Heading
            fit
            textColor="dktertiary"
            style={{ textShadow: "1px 1px 6px #222" }}
          >
            Why prioritize Accessibility?
          </Heading>
          <hr textfont="secondary" style={{ width: "100%" }} />
          <Text textColor="faded" style={[meStyles.Quote, styles.standardText]}>
            I would say like 90% of your day is dictated by technology, and if
            you, as a person,<br />are not included in that technology,{" "}
            <Text
              textColor="primary"
              style={[styles.standardText, { fontStyle: "italic" }]}
            >
              what's the point if the app is fast?
            </Text>
          </Text>
          <Cite>
            <Link
              textColor="links"
              style={[
                styles.smallText,
                {
                  textAlign: "center",
                  width: "100%",
                  textDecoration: "underline"
                }
              ]}
              href="https://youtu.be/sL4D_zRUVw4"
            >
              Jennifer Van, React Rally 2017
            </Link>
          </Cite>
        </Fill>
      </Slide>
    );
  }
}
