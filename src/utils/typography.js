import "./global.css"
import Typography from "typography"
import githubTheme from "typography-theme-github"

githubTheme.baseFontSize = "18px"
githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	"h1,h2": {
		borderBottom: `0px`,
		marginTop: `0px`,
		marginBottom: `0px`,
	},
	h6: {
		color: `#000`,
	},
	a: {
		color: `#000`,
		textDecoration: `none`,
		borderBottom: `1px solid`,
	},
	"a:hover,a:active": {
		textDecoration: `none`,
		borderBottom: `2px solid`,
	},
	blockquote: {
		borderLeft: `5px solid #000`,
		color: `#000`,
		fontWeight: `500`,
		fontStyle: `italic`,
	},
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
	typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
