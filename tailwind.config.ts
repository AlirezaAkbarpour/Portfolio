import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'icon-blue':'#120f31',
        'background-theme': '#F4EFF1',
        'background-base':'#FFFFFF',
        'footer-color-black':"#120F31",
        'footer-light-text':'#8D8D8D',
        'footer-light-text2':'#D9D9D9',
        'dashboard-orange':'#eb734f'
      },
      fontFamily:{
        'archivo':['archivo'],
      },
      width:{
        'p':"820px"
      }
    },
  },
  plugins: [],
}
export default config
