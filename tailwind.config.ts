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
        'darker-gunpowder-gray': '#303030',
      },
      fontSize: {
        base: ['18px', { lineHeight: '28px', fontWeight: 'regular' }],
        xs: ['15px', { lineHeight: '28px', letterSpacing: '3px' }],
        lg: ['18px', { fontWeight: 'bold', lineHeight: '28px' }],
        xl: [
          '20px',
          { fontWeight: 'regular', lineHeight: '28px', letterSpacing: '4px' },
        ],
        '2xl': [
          '24px',
          { fontWeight: 'bold', lineHeight: '28px', letterSpacing: '4.8px' },
        ],
        '5xl': ['56px', { fontWeight: 'bold' }],
        '10xl': ['200px', { fontWeight: 'bold', letterSpacing: '-5px' }],
      },
      screens: {
        mobile: '350px',
      },
    },
  },
  plugins: [],
}
export default config
