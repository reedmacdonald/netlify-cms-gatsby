import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Image from "gatsby-image";
import "pure-react-carousel/dist/react-carousel.es.css";

const ScholarshipRoll = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  let newArray;

  const makeRepeated = (arr, repeats) =>
    [].concat(...Array.from({ length: repeats }, () => arr));
  const newPosts = makeRepeated(posts, 10);
  /*window.woopra.config({
    domain: "myscholly.com",
  });
  window.woopra.track("Experiment, please disregard", {});
  That worked!
  */
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={30}
      totalSlides={newPosts.length}
      infinite={true}
    >
      <Slider>
        {newPosts.map((post, index) => {
          return (
            <Slide style={{ width: "300px" }} index={index}>
              <div
                style={{
                  borderRadius: "20px",
                  backgroundColor: "rgb(245,245,245)",
                  margin: "15px",
                }}
              >
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.node.fields.slug}
                >
                  <div
                    style={{
                      maxHeight: "100%",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        maxHeight: "130px",
                        borderTopRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        fluid={
                          post.node.frontmatter.featuredimage.childImageSharp
                            .fluid
                        }
                        alt={post.node.frontmatter.featuredimage.title}
                      />
                    </div>
                    <h4 style={{ color: "black" }}>
                      {post.node.frontmatter.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "lighter",
                        color: "black",
                        marginTop: "10px",
                      }}
                    >
                      {post.node.excerpt.substring(0, 100) + "..."}
                    </p>
                  </div>
                </Link>
              </div>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query ScholarshipRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ScholarshipRoll data={data} count={count} />}
  />
);
