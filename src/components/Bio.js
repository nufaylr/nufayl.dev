import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const componentStyle = {
  container: {
    display: `flex`,
    marginTop: `20px`,
  },
  profilePic: {
    marginRight: rhythm(1 / 2),
    marginBottom: 0,
    minWidth: 50,
    borderRadius: `100%`,
  },
  imageRadius: {
    borderRadius: `50%`,
  },
}

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const { container, profilePic, imageRadius } = componentStyle
  return (
    <div style={container}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={profilePic}
        imgStyle={imageRadius}
      />
      <p>{author.summary}</p>
    </div>
  )
}

export default Bio
