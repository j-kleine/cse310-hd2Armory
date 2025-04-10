/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // Custom theme colors to mactch the Helldivers 2 aesthetic
        colors: {
          helldiversYellow: '#FFE900',
        },
        // Custom fonts to match the Helldivers 2 in-game aesthetic
        fontFamily: {
          helldiversHeader: ['HelldiversHeaderFont', 'sans-serif'],
          helldiversBody: ['HelldiversBodyFont', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  