module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', "sans-serif"]
      },
      colors: {
        'background': '#303633',
        'primary': '#2a9d8f',
        'secondary': '#24877B'
      },
      // backgroundImage: {
      //   'waves': "url(./layered-waves-haikei.svg)"
      // }
    },
  },
  plugins: [],
}