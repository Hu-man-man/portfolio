import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // safelist: ['backdrop-blur-md'],
  theme: {
    extend: {
      colors: {
        mintGreen: '#cffffb',
      },
    },

  },
  plugins: [],
}
export default config
