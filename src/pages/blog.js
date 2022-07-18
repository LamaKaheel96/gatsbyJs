import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Our Blog" />
    <div>
      <Container>
        <Row>
          <Col>
            <h4>Latest Blogs</h4>
          </Col>
        </Row>
        <Row>
      {data.allMarkdownRemark.edges.map(post => (
        <Col xs={6}>
          <div key={post.node.id}>
            <Card className="text-center">
              <Card.Header>{post.node.frontmatter.title}</Card.Header>
              <Card.Body>
                <Button variant="info"><Link to={post.node.frontmatter.path}>Read More</Link></Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                <small>Posted By: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
              </Card.Footer>
            </Card>
          </div>
        </Col>
      ))}
      </Row>
      </Container>
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date
            path
            title
          }
        }
      }
    }
  }
`
export default BlogPage
