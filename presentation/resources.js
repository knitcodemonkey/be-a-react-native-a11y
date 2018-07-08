// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Layout, Link } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "./styles";

// Require CSS
import "normalize.css";
const images = {
  accessibilityGif: require("../assets/aboutA11y/AccessibilityGif.gif")
};
preloader(images);

export default class Resources extends React.Component {
  render() {
    return (
      <Slide bgColor="#070707" style={{ width: "100%", position: "relative" }}>
        <Heading textColor="quartenary" style={styles.littleSpacePlease}>
          Resources
        </Heading>
        <Layout
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: "20px"
          }}
        >
          <Link
            textColor="links"
            style={styles.links}
            href="https://facebook.github.io/react-native/docs/accessibility.html"
          >
            React Native Accessibility Documentation
          </Link>

          <Link
            textColor="links"
            style={styles.links}
            href="https://blogs.dropbox.com/tech/2017/04/creating-a-culture-of-accessibility/"
          >
            Dropbox: Creating a culture of accessibility
          </Link>

          <Link
            textColor="links"
            style={styles.links}
            href="https://www.deque.com/blog/intro-accessibility-inspector-tool-ios-native-apps/"
          >
            Intro to the Accessibility Inspector Tool for iOS Native Apps
          </Link>

          <Link
            textColor="links"
            style={styles.links}
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor"
          >
            Accessibility Scanner App by Google
          </Link>

          <Link
            textColor="links"
            style={styles.links}
            href="https://medium.com/@larenelg/creating-inclusive-apps-in-react-native-the-coding-bit-bd3832349009"
          >
            React Native Accessibility: Creating Inclusive Apps in React Native — the coding bit
          </Link>

          <Link
            textColor="links"
            style={styles.links}
            href="https://www.deque.com/blog/introduction-native-mobile-accessibility-featuring-deque-university-iosandroid/"
          >
            An Introduction to Native Mobile Accessibility – Featuring Deque University for iOS/Android
          </Link>
        </Layout>
      </Slide>
    );
  }
}
