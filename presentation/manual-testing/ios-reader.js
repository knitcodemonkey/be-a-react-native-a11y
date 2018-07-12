// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide } from "spectacle";

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
        bgColor="#070707"
        bgDarken={0.8}
        style={{ width: "100%", position: "relative" }}
      >
        <iframe src="https://dequeuniversity.com/assets/pdf/screenreaders/voiceover-ios-images-guide.pdf" style={{ width: "1000px", height: "600px" }} />
      </Slide>
    );
  }
}
