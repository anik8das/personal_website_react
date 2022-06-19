module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                 'homebg': "url('/src/imgs/homebg.jpg')",
                 'aboutbg': "url('/src/imgs/aboutbg.jpg')",
                 'hobbiesbg': "url('/src/imgs/hobbiesbg.jpg')",
                 'connectbg': "url('/src/imgs/connectbg.jpg')",
                 'blackmenu': "url('/src/imgs/black-menu.jpg')",
                 'whitemenu': "url('/src/imgs/white-menu.jpg')"
                })
    },
  },
  plugins: [],
}