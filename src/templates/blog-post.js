import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Default from '../components/forms/Default'
import ShortWithEssay from '../components/forms/ShortWithEssay'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  termsLink,
  gradeLevels,
  color,
  typeOfForm,
  essayQuestion,
  live
}) => {
  const PostContent = contentComponent || Content;
  const renderForm=()=>{
    if(typeOfForm=='Default'){
      return <Default grades={gradeLevels}/>
    }else if(typeOfForm=='Short with Essay'){
      return <ShortWithEssay essayQuestion={essayQuestion} grades={gradeLevels}/>
    }
  }
 if(live){
   return <h1>This scholarship is no longer active</h1>
 }

  return (
    <section className="section" style={{backgroundColor:color}}>
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {renderForm()}
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
                <Link to={`/terms/${termsLink}`}>Terms and Conditions</Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <>
      <Layout>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{post.frontmatter.title || "title"}</title>
              <meta
                name="description"
                content={post.frontmatter.description || "description"}
              />
              <meta
                name="image"
                content={`https://gallant-ptolemy-269c61.netlify.app${post.frontmatter.featuredimage.publicURL}`}
              />
              <meta
                property="og:title"
                content={post.frontmatter.title || "title"}
              />
              <meta
                property="og:description"
                content={post.frontmatter.description || "description"}
              />
              <meta property="og:type" content={"article"} />
              <meta
                property="og:image"
                content={
                  `https://gallant-ptolemy-269c61.netlify.app${post.frontmatter.featuredimage.publicURL}` ||
                  null
                }
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content={post.frontmatter.title || "title"}
              />
              <meta
                name="twitter:description"
                content={post.frontmatter.description || "description"}
              />
              <meta
                property="og:url"
                content={
                  `https://gallant-ptolemy-269c61.netlify.app${post.fields.slug}` ||
                  "https://google.com"
                }
              />
              <meta
                name="twitter:image"
                content={`https://gallant-ptolemy-269c61.netlify.app${post.frontmatter.featuredimage.publicURL}`}
              />
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          termsLink={post.frontmatter.alugAlternate}
          typeOfForm={post.frontmatter.typeOfForm}
          gradeLevels={post.frontmatter.gradeLevels}
          color={post.frontmatter.color}
          essayQuestion={post.frontmatter.essayQuestion}
          live={post.frontmatter.live}
        />
      </Layout>
    </>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        alugAlternate
        tags
        featuredimage {
          publicURL
        }
        typeOfForm
        gradeLevels
        color
        essayQuestion
        live
      }
    }
  }
`;
