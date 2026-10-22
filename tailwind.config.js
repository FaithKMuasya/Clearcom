/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['Roboto', 'Arial', 'sans-serif'],
      },
      // Type sizes from the original Clearcom theme.
      fontSize: {
        lg: ['17px', { lineHeight: '1.6' }],
        xl: ['22px', { lineHeight: '30px' }],
        '3xl': ['32px', { lineHeight: '1.25' }],
        '4xl': ['40px', { lineHeight: '1.2' }],
        '5xl': ['40px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
};
