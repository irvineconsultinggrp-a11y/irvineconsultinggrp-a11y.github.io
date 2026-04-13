/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aileron', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Aileron', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Aileron', 'ui-monospace', 'monospace'],
      },
      colors: {
        icgblue: '#061e2a',
        skyblue: '#bde0fe',
      },
    },
  },
  plugins: [],
};