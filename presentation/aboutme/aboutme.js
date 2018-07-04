// Import React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import { Heading, Slide, Text, Notes, Layout, Fill, Link, Image } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  me: require("../../assets/aboutme/JenLuker.jpg"),
  JenDevDesk: require("../../assets/aboutme/JensDesk.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");
const meStyles = {
  ...styles,
  myFace: {
    maxWidth: "80%",
    borderRadius: "50%",
    boxShadow: "0px 0px 10px #222"
  }
};

export default class AboutMe extends Component {
  render() {
    return (
      <Slide bgColor="faded" bgImage={images.JenDevDesk} bgDarken={0.7}>
        <Notes>Software engineer, professionally, for over 10 years</Notes>
        <Layout>
          <Fill>
            <Image margin="0" src={images.me} style={meStyles.myFace} />
          </Fill>
          <Fill
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
              Jen Luker
            </Heading>

            <hr textfont="secondary" style={{ width: "100%" }} />

            <Text style={[meStyles.standardText, { fontSize: "2.9rem" }]} textColor="primary">
              Lead Software Engineer
            </Text>

            <hr textfont="secondary" style={{ width: "100%" }} />

            <Link textColor="dktertiary" href="http://jenluker.com">
              <Text textColor="dktertiary" style={meStyles.smallText}>
                http://jenluker.com
              </Text>
            </Link>

            <Text textColor="primary" style={meStyles.smallText}>
              Github: @knitcodemonkey
            </Text>

            <Text textColor="primary" style={meStyles.smallText}>
              Twitter: @knitcodemonkey
            </Text>
          </Fill>
        </Layout>

        <Layout style={styles.spacePlease}>
          <Fill
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text textColor="primary" style={[styles.smallText, { padding: 0 }]}>
              Follow along with the slides:
            </Text>
            <Link textColor="dktertiary" style={styles.smallText} href={this.props.slideUrl}>
              {this.props.slideUrl}
            </Link>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}

AboutMe.propTypes = {
  slideUrl: PropTypes.string
};
