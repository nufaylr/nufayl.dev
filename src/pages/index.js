import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { rhythm } from "../utils/typography"

const componentStyle = {
  blogIndexHeader: { borderBottom: `5px solid #f3dbb2` },
  postArticle: {
    borderBottom: `2px solid #f3dbb2`,
    marginTop: `20px`,
  },
  postArticleTitle: {
    marginBottom: rhythm(1 / 4),
  },
  postArticleTitleLink: {
    boxShadow: `none`,
  },
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const {
    blogIndexHeader,
    postArticle,
    postArticleTitle,
    postArticleTitleLink,
  } = componentStyle
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Full-stack web developer" type="home" />
      <header style={blogIndexHeader}>
        <h1>Recent Posts</h1>
        <p>My latest blog posts can be found here.</p>
      </header>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} style={postArticle}>
            <header>
              <h2 style={postArticleTitle}>
                <Link style={postArticleTitleLink} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
