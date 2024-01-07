import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cobaltBlue: '#1446a0',
        razzmatazz: '#db3069',
        naplesYellow: '#f5d547',
        beige: '#ebebd3',
        onix: '#3c3c3b',
      },
    },

  },
  plugins: [],
}
export default config
