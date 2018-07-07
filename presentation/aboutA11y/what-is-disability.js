import React from "react";
import { Heading, Slide, Text, Notes, Link, Cite } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../assets/aboutA11y/access-wheelchair.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class What extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.8}>
        <Notes>
          How many of you have had one of these experiences?
          <ul>
            <li>Watched a film in a language you didn't know?</li>
            <li>Broken a leg, or an arm?</li>
            <li>Tried to use the web while holding a sleeping baby?</li>
            <li>Watched a video, in a noisy resturaunt?</li>
            <li>Asked your phone for directions?</li>
            <li>Mouse batteries died, and too lazy to use laptop mouse?</li>
            <li>
              How many of you have computer games that verbally provide
              instructions to your illiterate child?
            </li>
            <li>
              What about repetetive stress injuries like carpel tunnel or tennis
              elbow?
            </li>
          </ul>
          How many of you, or your loved ones, interacted with your phone,
          watched tv, or otherwise interacted with technology during those
          experiences?
        </Notes>
        <Heading
          size={2}
          textColor="dktertiary"
          style={{ textShadow: "1px 1px 6px #222" }}
        >
          What is Disability?
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Text
          textColor="faded"
          style={[styles.standardText, styles.littleSpacePlease]}
        >
          "When a person is denied access due to a technology barrier, the
          impairment to their ability did not occur because of their body’s
          limitations, rather{" "}
          <Text
            textColor="primary"
            style={[
              styles.standardText,
              { fontStyle: "italic", display: "inline" }
            ]}
          >
            the defect occurred in the technology."
          </Text>
        </Text>
        <Cite>
          <Link
            textColor="links"
            style={styles.links}
            href="https://accessibility.princeton.edu/blogs/applying-social-model-disability-web-accessibility"
          >
            Damian Sian, ICT Accessibility
          </Link>
        </Cite>
      </Slide>
    );
  }
}
