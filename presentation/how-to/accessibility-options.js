// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, Layout, Fill } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";

// Require CSS
import "normalize.css";
const images = {
  mobileDevices: require("../../assets/backgrounds/mobileDevices.jpg")
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
        <Heading size={3} textColor="red">
          Accessibility Props
        </Heading>
        <hr textfont="secondary" style={{ width: "100%" }} />

        <Layout style={styles.littleSpacePlease}>
          <Fill>
            <Text
              style={[styles.smallText]}
              textColor="quartenary"
            >
          accessible (iOS, Android)
            </Text>
            <Text
              style={[styles.smallText]}
              textColor="quartenary"
            >
          accessibilityLabel (iOS, Android)
            </Text>
          </Fill>
        </Layout>

        <Layout style={[styles.littleSpacePlease, { margin: "0px auto", width: "90%", margin: "0px auto" }]}>
          <Fill>
            <Heading textColor="red" style={[styles.smallText, { textAlign: "left" }]}>iOS Only</Heading>

            <Text
              style={[styles.smallText, { textAlign: "left" }]}
              textColor="quartenary"
            >
          accessibilityTraits

            </Text>

            <Text
              style={[styles.smallText, { textAlign: "left" }]}
              textColor="quartenary"
            >
          accessibilityViewIsModal
            </Text>
            <Text
              style={[styles.smallText, { textAlign: "left" }]}
              textColor="quartenary"
            >
          accessibilityElementsHidden
            </Text>
            <Text
              style={[styles.smallText, { textAlign: "left" }]}
              textColor="quartenary"
            >
          onAccessibilityTap
            </Text>
            <Text
              style={[styles.smallText, { textAlign: "left" }]}
              textColor="quartenary"
            >
          onMagicTap
            </Text>
          </Fill>

          <Fill>
            <Heading textColor="red" style={[styles.smallText, { textAlign: "left" }]}>Android Only</Heading>
            <Text
              style={[styles.smallText, { textAlign: "left" }]}
              textColor="quartenary"
            >
              accessibilityComponentType
            </Text>
            <Text
              style={[styles.smallText, { textAlign: "left" }]}
              textColor="quartenary"
            >
              accessibilityLiveRegion
            </Text>
            <Text
              style={[styles.smallText, { textAlign: "left" }]}
              textColor="quartenary"
            >
              importantForAccessibility
            </Text>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
