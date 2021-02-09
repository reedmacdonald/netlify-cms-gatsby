import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
    title,
}) => {


    return (
        <section className="section">

            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title} Terms and Conditions
            </h1>

                    </div>
                </div>
            </div>
        </section>
    );
};


const BlogPost = ({ pageContext }) => {
    return (
        <Layout>
            <BlogPostTemplate
                title={pageContext.title}
            />
        </Layout>
    );
};



export default BlogPost;

