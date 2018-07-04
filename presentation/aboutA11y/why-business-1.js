import React from "react";
import { Heading, Slide, Notes } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  wheelchair: require("../../assets/backgrounds/access-wheelchair.jpg"),
  JenniferVan: require("../../assets/JenniferVan.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class WhyBusiness extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.8}>
        <Notes>
          <p>So, what is disability?</p>
        </Notes>
        <Heading
          size={2}
          textColor="dktertiary"
          style={{ textShadow: "1px 1px 6px #222" }}
        >
          Why should the business care?
        </Heading>
      </Slide>
    );
  }
}
