import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Default from '../components/forms/Default'
import ShortWithEssay from '../components/forms/ShortWithEssay'
import LongWithEssay from '../components/forms/LongWithEssay'
import RedButton from '../components/RedButton'
const toSnakeCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');

export const BlogPostTemplate = ({
    title,
    money,
    requirements,
    helmet
}) => {


    const renderForm = () => {
        return <Default grades={['freshman', 'sophomore']} />

    }


    return (
        <section className="section" style={{ backgroundColor: 'white' }}>
            {helmet || ""}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {money} {' '}{title}{' '} Scholarship
                        </h1>
                        <h3>Requirements: {requirements}</h3>
                        <h3>This scholarship is fake.</h3>
                        {renderForm()}
                        <div style={{ display: 'grid', placeItems: 'center', marginTop: '20px' }}>
                            <RedButton onClick={() => {
                                window.woopra.config({
                                    domain: "myscholly.com",
                                });
                                window.woopra.track('Submitted Fake Essay', { fakeEssayName: title });
                                alert(`You have applied to the ${title} Scholarship`)
                            }} message={'submit'} />
                        </div>
                        <Link to={`/terms-and-conditions/${toSnakeCase(title)}`}>Term and Conditions</Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

const NewScholarship = ({ pageContext }) => {
    let newTitle = `${pageContext.money} ${pageContext.title} scholarship`
    return (
        <>
            <Layout realTitle={`${pageContext.money} ${pageContext.title} scholarship`} realDescription={`Apply here to the ${pageContext.money} ${pageContext.title} scholarship`}>
                <BlogPostTemplate
                    title={pageContext.title}
                    money={pageContext.money}
                    requirements={pageContext.requirements}
                    helmet={
                        <Helmet titleTemplate="%s">
                            <title>{newTitle || "title"}</title>
                            <meta
                                name="description"
                                content={`Apply here to the ${pageContext.money} ${pageContext.title} scholarship` || "description"}
                            />

                            <meta
                                property="og:title"
                                content={newTitle || "title"}
                            />
                            <meta
                                property="og:description"
                                content={`Apply here to the ${pageContext.money} ${pageContext.title} scholarship` || "description"}
                            />
                            <meta property="og:type" content={"article"} />
                            <meta
                                property="og:image"
                                content={

                                    null
                                }
                            />
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta
                                name="twitter:title"
                                content={newTitle || "title"}
                            />
                            <meta
                                name="twitter:description"
                                content={`Apply here to the ${pageContext.money} ${pageContext.title} scholarship` || "description"}
                            />
                            <meta
                                property="og:url"
                                content={
                                    `https://gallant-ptolemy-269c61.netlify.app/scholarships/${toSnakeCase(pageContext.title)}` ||
                                    "https://google.com"
                                }
                            />
                        </Helmet>
                    }
                />
            </Layout>
        </>
    );
};

export default NewScholarship;

