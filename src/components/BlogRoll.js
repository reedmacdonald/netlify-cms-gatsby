import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import CarouselSlider from "react-carousel-slider";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Image from "gatsby-image";

const BlogRoll = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  //hello
  let newArray;

  let newPosts = posts.map((post) => {
    console.log(post, "<<---post");
    return (
      <div
        style={{
          width: "300px",
          borderRadius: "20px",
          backgroundColor: "rgb(245,245,245)",
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
                maxHeight: "100px",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image
                fluid={
                  post.node.frontmatter.featuredimage.childImageSharp.fluid
                }
              />
            </div>
            <h4 style={{ color: "black" }}>{post.node.frontmatter.title}</h4>
            <h5 style={{ color: "black" }}>
              {post.node.excerpt.substring(0, 100) + "..."}
            </h5>
          </div>
        </Link>
      </div>
    );
  });
  let sliderBoxStyle = {
    background: "transparent",
  };
  let dotsSetting = {
    placeOn: "top",
    style: {
      dotSize: "5px",
      currDotColor: "rgba(155, 108, 27, 0.5)",
      marginTop: "0px",
      display: "none",
    },
  };

  return (
    <CarouselSlider
      accLe={{ dots: false, buton: false, flag: false }}
      sliderBoxStyle={sliderBoxStyle}
      slideCpnts={newPosts}
      dotsSetting={dotsSetting}
    />
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
