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
  srOnly: {
    position: `absolute`,
    left: `-10000px`,
    top: `auto`,
    width: `1px`,
    height: `1px`,
    overflow: `hidden`,
  },
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const { continer, layoutHeader, layoutHeaderLink, srOnly } = componentStyle
  return (
    <div style={continer}>
      <header style={layoutHeader}>
        <h1 style={srOnly}>{title}</h1>
        {location.pathname === rootPath ? (
          <Bio />
        ) : (
          <nav aria-label="Main menue" role="navigation">
            <Link style={layoutHeaderLink} to={`/`}>
              Retrun back to home
            </Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
