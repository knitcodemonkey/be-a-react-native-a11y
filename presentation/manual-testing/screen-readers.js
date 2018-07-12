// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Layout, Fill, Image, Link } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";

// Require CSS
import "normalize.css";
const images = {
  mobileDevices: require("../../assets/backgrounds/mobileDevices.jpg"),
  gestureCheatSheet: require("../../assets/how-to/a11y-cheatsheet.png")
};
preloader(images);

export default class A11yIntro extends React.Component {
  render() {
    return (
      <Slide
        bgImage={images.mobileDevices}
        bgDarken={0.7}
        bgColor="#070707"
        style={{ width: "100%", position: "relative" }}
      >
        <Heading fit textColor="red">Screen Reader Cheatsheets</Heading>

        <Image src={images.gestureCheatSheet} style={{ width: "75%", height: "auto" }} />

        <Layout>
          <Fill>
            <Link
              textColor="links"
              style={[styles.links, styles.extraSmallText, styles.littleSpacePlease]}
              href="https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts"
            >
            Deque University VoiceOver for iOS Cheatsheets
            </Link>
          </Fill>
          <Fill>
            <Link
              textColor="links"
              style={[styles.links, styles.extraSmallText, styles.littleSpacePlease]}
              href="https://dequeuniversity.com/screenreaders/talkback-shortcuts"
            >
            Deque University TalkBack Cheatsheets
            </Link>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
