import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import idk from "./index.scss";

import Image from "gatsby-image";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  otherimage,
}) => {
  console.log(otherimage, "<-----otherimage");
  return (
    <div style={{ width: "1100px", margin: "0 auto" }}>
      <div className={"grid-four"}>
        <div>
          <h1>{title}</h1>
          <h3>{subheading}</h3>
          <div className="holder92">
            <input type="text" className="leftThing992" placeholder="email" />
            <span className="rightThing992">
              <button className="rightThingButton2">
                Find Scholarships Today
              </button>
            </span>
          </div>
        </div>
        <Image fluid={image.childImageSharp.fluid} />
      </div>
      <h1>As seen on</h1>
      <Image fluid={otherimage.childImageSharp.fluid} />
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter, "<---frontmatter");

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        otherimage={frontmatter.otherimage}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        otherimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
