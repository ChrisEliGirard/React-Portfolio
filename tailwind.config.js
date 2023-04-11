/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js",
    "./src/components/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'code': ['Inconsolata', 'monospace']
      },
      colors: {
        'background': '#191919',
        'primary': {
          100: '#1c71a7',
          300: '#4D71AB',
          500: '#2D4263',
          900: '#2D3863'
        },
        'secondary': '#C84B31',
        'contrast': '#ECDBBA'
      }
    },
  },
  plugins: [],
}

