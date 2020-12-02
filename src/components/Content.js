import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}><ReactMarkdown>{content}</ReactMarkdown></div>
)





export default Content
