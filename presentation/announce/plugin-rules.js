// Import React
import React from "react";
import styles from "../styles";

// Import Spectacle Core tags
import { Heading, Slide, Text, List, ListItem, Code } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
const images = {
  formidable: require("../../assets/aboutme/formidable-logo.svg"),
  formidableHero: require("../../assets/aboutme/formidableHero.jpg"),
  twitter: require("../../assets/aboutme/twitter.svg"),
  link: require("../../assets/aboutme/Link.svg")
};
preloader(images);

export default class AboutMe extends React.Component {
  render() {
    return (
      <Slide
        bgImage={images.formidableHero}
        bgColor="#070707"
        bgDarken={0.1}
        style={{ width: "100%", position: "relative" }}
      >
        <Heading fit textColor="red">eslint-plugin-react-native-a11y</Heading>
        <Code textColor="primary" style={[styles.littleSpacePlease, styles.extraSmallText]}>npm install --save-dev eslint-plugin-react-native-a11y</Code>

        <List style={[styles.littleSpacePlease, styles.extraSmallText]}>
          <ListItem textColor="primary" style={styles.listItems}><Text textColor="red" style={[styles.extraSmallText, { display: "inline", marginRight: "5px" }]}>accessibility-label:</Text> Views with accessible={"{"}true{"}"} also set the accessibilityLabel prop</ListItem>
          <ListItem textColor="primary" style={styles.listItems}><Text textColor="red" style={[styles.extraSmallText, { display: "inline", marginRight: "5px" }]}>no-nested-touchables:</Text> If a view has accessible={"{"}true{"}"}, there are no touchable elements inside</ListItem>
          <ListItem textColor="primary" style={styles.listItems}><Text textColor="red" style={[styles.extraSmallText, { display: "inline", marginRight: "5px" }]}>has-accessibility-props:</Text> Enforce all {"<"}Touchable\*> components have accessibilityTraits & accessibilityComponentType set</ListItem>
          <ListItem textColor="primary" style={styles.listItems}><Text textColor="red" style={[styles.extraSmallText, { display: "inline", marginRight: "5px" }]}>has-valid-accessibility-component-type:</Text> Enforce accessibilityComponentType property value is valid</ListItem>
          <ListItem textColor="primary" style={styles.listItems}><Text textColor="red" style={[styles.extraSmallText, { display: "inline", marginRight: "5px" }]}>has-valid-accessibility-traits:</Text> Enforce accessibilityTraits and accessibilityComponentType prop values are valid</ListItem>
          <ListItem textColor="primary" style={styles.listItems}><Text textColor="red" style={[styles.extraSmallText, { display: "inline", marginRight: "5px" }]}>has-valid-important-for-accessibility:</Text> Enforce importantForAccessibility property value is valid</ListItem>
        </List>
      </Slide>
    );
  }
}
