import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Jumbotron ,Breadcrumb ,Container, Row, Col} from 'react-bootstrap'
function blogSinglePost({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="Our Blog" />
    <Container>
      <Row>
        <Col>
          <div className="text-left">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/blog">Go Back</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {post.frontmatter.title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <Jumbotron>
            <Container>
              <div className="lead" dangerouslySetInnerHTML={{__html: post.html}} />
              <div className="text-muted">
                <small>Posted By: {post.frontmatter.author} on {post.frontmatter.date}</small>
              </div>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    </Layout>
  )
}

export const postQuery = graphql `
  query BlogPostByPath($path : String!) {
    markdownRemark(frontmatter: {path : {eq: $path} }){
      html 
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default blogSinglePost
