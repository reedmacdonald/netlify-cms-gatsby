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
}) => {
  return (
    <div className={"grid-four"} style={{ width: "1100px", margin: "0 auto" }}>
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
          <div
            className="leftThing992-error"
            style={{
              display: "none",
              width: "100%",
              fontSize: "16px",
              fontWeight: "500",
              margin: "5px 10px",
              color: "#fb113f",
            }}
          >
            Email invalid!
          </div>
        </div>
      </div>
      <Image fluid={image.childImageSharp.fluid} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

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
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
