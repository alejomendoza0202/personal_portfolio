module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ['Roboto Mono', "monospace"]
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite'
      }
    },
  },
  plugins: [],
}