/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1120px",
    },
    colors: {
      Blue: "hsl(246, 80%, 60%)",
      workBg: "hsl(15, 100%, 70%)",
      playBg: "hsl(195, 74%, 62%)",
      studyBg: "hsl(348, 100%, 68%)",
      exerciseBg: "hsl(145, 58%, 55%)",
      socialBg: "hsl(264, 64%, 52%)",
      selfCareBg: "hsl(43, 84%, 65%)",
      veryDarkBlue: "hsl(226, 43%, 10%)",
      darkBlue: "hsl(235, 46%, 20%)",
      desaturatedBlue: "hsl(235, 45%, 61%)",
      paleBlue: "hsl(236, 100%, 87%)",
    },
    fontFamily: {
      rubik: ["'Rubik', 'sans-serif'"],
    },
    extend: {},
  },
  plugins: [],
};
