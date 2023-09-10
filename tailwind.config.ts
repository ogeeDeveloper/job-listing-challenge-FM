import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        neutral: {
          lightBg: 'hsl(180, 52%, 96%)',
          lightFilter: 'hsl(180, 31%, 95%)',
          dark: 'hsl(180, 8%, 52%)',
          veryDark: 'hsl(180, 14%, 20%)',
        }
      },
    },
    fontSize: {
      'base': ['15px', '1.5'],
    },
    screens: {
      'mobile': '375px',
      'desktop': '1440px',
    },
  },
  plugins: [],
}
export default config
