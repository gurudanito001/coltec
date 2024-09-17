import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        "primary": "#472901",
        "secondary": "#001433",
        "hero-bg": "#EFDCBA",
        "accent": "#c29c6b",
        "neutral": "#fff3e3",
        "base": "#fff3e3",
        "overlay-blue": "rgba(0, 20, 51, 0.7)",
        "overlay-cream": "rgba(255, 251, 245, 0.7)"
      },
      width: {
        "500": "500px"
      },
      height: {
        "800": "800px",
        "550": "550px",
        "600": "600px",
        "850": "850px"
      },
      maxHeight: {
        
        "550": "550px",
        "600": "600px",
        "850": "850px"
      },
      maxWidth: {
        "450": "450px",
        "550": "550px",
        "600": "600px",
        "800": "800px"
      },
      animation: {
				fade: 'fadeIn .5s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
			},
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "corporate",],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
