import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Bio from "../components/Bio"
import Footer from "../components/Footer"

const componentStyle = {
  continer: {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  },
  layoutHeader: {
    background: `#ffff30`,
    padding: `20px`,
    border: `4px solid #ead8ba`,
    marginBottom: `30px`,
    borderRadius: `15px`,
  },
  layoutHeaderLink: {
    boxShadow: `none`,
    color: `inherit`,
    marginBottom: 0,
    marginTop: 0,
  },
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const { continer, layoutHeader, layoutHeaderLink } = componentStyle
  return (
    <div style={continer}>
      <header style={layoutHeader}>
        {location.pathname === rootPath ? (
          <Bio />
        ) : (
          <Link style={layoutHeaderLink} to={`/`}>
            Retrun back to home
          </Link>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
