module.exports = {
  mode: 'jit',
  purge: [
    './dist/index.html',
    './dist/about.html',
    './dist/projects.html',
    './dist/contact.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
