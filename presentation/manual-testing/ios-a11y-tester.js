// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, ListItem, List, Text } from "spectacle";

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
        <Heading fit textColor="red" fit>iOS Accessibility Inspector</Heading>

        <Text textColor="primary">To start the Accessibility Inspector:</Text>
        <List>
          <ListItem textColor="primary" style={styles.smallText}>Bring up Xcode.</ListItem>
          <ListItem textColor="primary" style={styles.smallText}>Navigate to the Open Developer Tool.</ListItem>
          <ListItem textColor="primary" style={styles.smallText}>Start the Accessibility Inspector.</ListItem>
          <ListItem textColor="primary" style={styles.smallText}>Bring up the simulator with the application running</ListItem>
        </List>

      </Slide>
    );
  }
}
