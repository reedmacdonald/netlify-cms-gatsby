import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import ScholarshipRoll from "../components/ScholarshipRoll";
import AdvancedButton from "../components/AdvancedButton";
import "./index.scss";

import Image from "gatsby-image";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  otherimage,
  step1,
  step2,
  step3,
}) => {
  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <div className={"grid-four margins"}>
        <div>
          <h1>{title}</h1>
          <h3>{subheading}</h3>
          <AdvancedButton />
        </div>
        <Image
          fluid={image.childImageSharp.fluid}
          alt={"Phone with the Scholly App on it"}
        />
      </div>
      <h1 style={{ textAlign: "center" }}>As seen on</h1>
      <Image fluid={otherimage.childImageSharp.fluid} alt={"Step 1"} />
      <div className={"grid-four margins"}>
        <div>
          <h1>{step1.title}</h1>
          <h3>{step1.description}</h3>
        </div>
        <Image fluid={step1.image.childImageSharp.fluid} />
      </div>
      <div className={"grid-four margins"}>
        <Image fluid={step2.image.childImageSharp.fluid} alt={"Step 2"} />
        <div>
          <h1 style={{ textAlign: "right" }}>{step2.title}</h1>
          <h3 style={{ textAlign: "right" }}>{step2.description}</h3>
        </div>
      </div>
      <div className={"grid-four margins"}>
        <div>
          <h1>{step3.title}</h1>
          <h3>{step3.description}</h3>
        </div>
        <Image fluid={step3.image.childImageSharp.fluid} alt={"Step3"} />
      </div>
      <h1 style={{ textAlign: "center" }}>Here's what our users have to say</h1>
      <h3 style={{ textAlign: "center" }}>
        Don’t just take our word for it, here are some of our thousands
        <br /> of user’s thought on Schalli’s success platform
      </h3>
      <div className="margins" style={{ textAlign: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/N1Fpy4Lf0xY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={"margins"}>
        <ScholarshipRoll />
      </div>
      <div className="margins">
        <h1 style={{ textAlign: "center" }}>Sign Up Today</h1>
        <h3 style={{ textAlign: "center" }}>
          Don’t just take our word for it, here are some of our thousands of
          user’s thoughts on
          <br /> Schalli’s success platform
        </h3>
      </div>
      <div className={"margins"} style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block" }}>
          <AdvancedButton />
        </div>
      </div>
    </div>
  );
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
        description={frontmatter.description}
        otherimage={frontmatter.otherimage}
        step1={frontmatter.step1}
        step2={frontmatter.step2}
        step3={frontmatter.step3}
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
        step1 {
          description
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        step2 {
          description
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        step3 {
          description
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
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
        description
      }
    }
  }
`;
