const contents = [
   {
      title: "Première partie",
      p: "Cette partie est ici pour expliquer la première section, il est pertinent de parler de la première image",
    },
    {
      title: "Seconde partie",
      p: "Tout comme au dessus",
    },
    {
      title: "Troisième partie",
      p: "Peut servir de conclusion mais on peut aussi en rajouter à la suite ",
    },
];

const section1title = document.querySelector("#section1title")
section1title.innerHTML = contents[0].title

const section1p = document.querySelector("#section1p")
section1p.innerHTML = contents[0].p

const section2title = document.querySelector("#section2title")
section2title.innerHTML = contents[1].title

const section2p = document.querySelector("#section2p")
section2p.innerHTML = contents[1].p

const section3title = document.querySelector("#section3title")
section3title.innerHTML = contents[2].title

const section3p = document.querySelector("#section3p")
section3p.innerHTML = contents[2].p





