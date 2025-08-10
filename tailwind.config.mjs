/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A66C2', // LinkedIn blue as placeholder accent
        wfBlue: '#123B5E',
        wfSand: '#E8E1D5',
        wfInk: '#0C1B2A'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji'],
        arabic: ['IBM Plex Sans Arabic','Tajawal','Cairo','ui-sans-serif','system-ui']
      }
    },
  },
  plugins: [],
}
