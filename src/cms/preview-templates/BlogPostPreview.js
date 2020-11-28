import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  console.log(entry.getIn(['data', 'typeOfForm']),'<--tired')

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      gradeLevels={entry.getIn(['data', 'gradeLevels'])._tail.array}
      color={entry.getIn(['data', 'color'])}
      typeOfForm={entry.getIn(['data', 'typeOfForm'])}
      essayQuestion={entry.getIn(['data', 'essayQuestion'])}
      notLive={false}
    />
  )
}

export default BlogPostPreview
