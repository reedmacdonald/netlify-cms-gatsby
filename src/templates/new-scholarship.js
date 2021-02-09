import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Default from '../components/forms/Default'
import ShortWithEssay from '../components/forms/ShortWithEssay'
import LongWithEssay from '../components/forms/LongWithEssay'
import RedButton from '../components/RedButton'

export const BlogPostTemplate = ({
    title,
}) => {


    const renderForm = () => {
        return <Default grades={['freshman', 'sophomore']} />

    }


    return (
        <section className="section" style={{ backgroundColor: 'white' }}>
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        {renderForm()}
                        <div style={{ display: 'grid', placeItems: 'center', marginTop: '20px' }}>
                            <RedButton onClick={() => {
                                window.woopra.config({
                                    domain: "myscholly.com",
                                });
                                window.woopra.track('Submitted Fake Essay', { fakeEssayName: title });
                                alert(`You have applied to the ${title}`)
                            }} message={'submit'} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const NewScholarship = ({ pageContext }) => {
    return (
        <>
            <Layout>
                <BlogPostTemplate
                    title={pageContext.title}
                />
            </Layout>
        </>
    );
};

export default NewScholarship;

