module.exports = {
	corePlugins: {
		preflight: false,
		container: false,
	},
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	theme: {
		spacing: {
			0: "0px",
			0.5: "2px",
			px: "1px",
			1: "4px",
			2: "8px",
			3: "12px",
			4: "16px",
			5: "20px",
			6: "24px",
			7: "28px",
			8: "32px",
			9: "36px",
			10: "40px",
			11: "44px",
			12: "48px",
			14: "56px",
			16: "64px",
			20: "80px",
			24: "96px",
			28: "112px",
			32: "128px",
			36: "144px",
			40: "160px",
			44: "176px",
			48: "192px",
			52: "208px",
			56: "224px",
			60: "240px",
			64: "256px",
			72: "288px",
			80: "320px",
			96: "384px",
		},
		borderRadius: {
			none: "0",
			sm: "2px",
			DEFAULT: "4px",
			lg: "8px",
			full: "9999px",
		},
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
		},
		fontSize: {
			xxs: ["8px", "8px"],
			xs: ["10px", "12px"],
			sm: ["14px", "20px"],
			base: ["16px", "24px"],
			md: ["18px", "22px"],
			lg: ["24px", "32px"],
			xl: ["30px", "40px"],
			xxl: ["45px", "48px"],
		},
		fontFamily: {
			ubuntu: ["Ubuntu", "sans-serif"],
		},
		extend: {
			colors: {
				blue: {
					50: "#32a5db",
					100: "#004a98",
					200: "#05548c",
					300: "#0069aa",
					400: "#004a98",
				},
				"ww-grey": {
					50: "#f4f4f4",
					100: "#f5f7f7",
					200: "#f0f0f0",
					300: "#5f5f5f",
					400: "#333333",
				},
				"tb-grey": {
					100: "#fafafa",
					200: "#EEEEEE",
				},
				"samsung-grey": {
					100: "#f4f4f4",
					200: "#aab6c2",
				},

				dark: "#06222f",
				branding: "#d1218a",
				"branding-1": "#B81874",
				"branding-2": "#A21868",
				"branding-3": "#8B195B",
				"branding-4": "#D61785",
			},
		},
	},

	variants: {},
	plugins: [
		"tailwindcss",
		"precss",
		"autoprefixer",
		function ({ addComponents }) {
			addComponents({
				".gln-hidden": {
					display: "none",
				},
				".vh-half": {
					height: "50vh",
				},
				".vh-sixty": {
					height: "60vh",
				},
				".wrapper": {
					width: "100%",
					paddingLeft: "15px",
					paddingRight: "15px",
					"@screen md": {
						maxWidth: "750px",
						paddingLeft: "0",
						paddingRight: "0",
						marginLeft: "auto",
						marginRight: "auto",
					},
					"@screen lg": {
						maxWidth: "970px",
					},
					"@screen xl": {
						maxWidth: "1170px",
					},
				},
			});
		},
	],
};
