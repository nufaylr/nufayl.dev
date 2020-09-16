import React from "react"

const componentStyle = {
	container: {
		display: "block",
		paddingTop: `20px`,
	},
	copyright: {
		display: "block",
		paddingTop: `20px`,
		marginTop: `20px`,
		borderTop: `5px solid rgb(243, 219, 178)`,
	},
	rssBlock: {
		float: "right",
	},
	socialBlock: {},
	socialItem: {
		marginRight: `10px`,
	},
}

const Footer = () => {
	const {
		container,
		copyright,
		rssBlock,
		socialBlock,
		socialItem,
	} = componentStyle
	return (
		<footer>
			<div style={container}>
				<div style={rssBlock}>
					<a href="/rss.xml" target="_blank" rel="noopener noreferrer">
						RSS
					</a>
				</div>
				<div style={socialBlock}>
					<a
						href="https://mobile.twitter.com/nufayl"
						target="_blank"
						rel="noopener noreferrer"
						style={socialItem}
					>
						Twitter
					</a>
					<a
						href="https://github.com/nufaylr"
						target="_blank"
						rel="noopener noreferrer"
						style={socialItem}
					>
						GitHub
					</a>
					<a
						href="https://stackoverflow.com/users/1276225/nufayl"
						target="_blank"
						rel="noopener noreferrer"
						style={socialItem}
					>
						Stack Overflow
					</a>
				</div>
			</div>
			<div style={copyright}>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</div>
		</footer>
	)
}

export default Footer
