// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Link, Image, Layout, List, ListItem, Fill } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";

// Require CSS
import "normalize.css";
const images = {
  mobileDevices: require("../../assets/backgrounds/mobileDevices.jpg"),
  androidA11yScanner: require("../../assets/androidA11yScanner.png")
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

        <Heading textColor="red" fit>Android Accessibility Scanner</Heading>
        <Layout style={[styles.littleSpacePlease, { flexBasis: "auto" }]}>
          <Fill style={{ width: "58%", flex: "auto" }}>


            <List>
              <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>
                Install <Link textColor="links" style={[styles.links, styles.smallText]} href="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor">Accessibility Scanner</Link> app
              </ListItem>
              <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>Navigate to Settings > Accessibility</ListItem>
              <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>Turn on Accessibility Scanner</ListItem>
              <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>Open your app</ListItem>
              <ListItem textColor="primary" style={[styles.smallText, { lineHeight: "2.8rem" }]}>Tap the Accessibility Scanner button</ListItem>
            </List>
          </Fill>
          <Fill style={{ width: "5%", flex: "auto" }} />
          <Fill style={{ width: "37%", flex: "auto" }}>
            <Image style={{ width: "100%", height: "auto" }} src={images.androidA11yScanner} />

          </Fill>
        </Layout>
        <Link
          textColor="links"
          style={[styles.links, styles.extraSmallText, styles.littleSpacePlease]}
          href="https://developer.android.com/training/accessibility/testing"
        >
            Android Developer Docs: Accessibility Testing
        </Link>
      </Slide>
    );
  }
}
