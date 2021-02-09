import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
const toSnakeCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');

export const AboutPageTemplate = ({ titles }) => {


    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                List of <u>Fake</u> Scholarships
                            </h2>
                            {<React.Fragment>{titles.schollysFake.map((name, index) => {
                                return (<div>
                                    <Link to={`/scholarships/${toSnakeCase(name)}`}>{titles.moneysFake[index] + ' '}{name + ' Scholarship'}</Link>
                                </div>)
                            })}</React.Fragment>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



const AboutPage = ({ pageContext }) => {

    return (
        <Layout>
            <AboutPageTemplate

                titles={pageContext.titles}

            />
        </Layout>
    )
}



export default AboutPage
