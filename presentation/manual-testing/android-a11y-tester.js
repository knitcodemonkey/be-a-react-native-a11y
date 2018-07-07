// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Link, Image } from "spectacle";

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

        <Image height="70%" width="70%" src={images.androidA11yScanner} />

        <Link
          textColor="links"
          style={styles.links}
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor"
        >
          Accessibility Auditor on Google Play
        </Link>

      </Slide>
    );
  }
}
