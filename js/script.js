window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 1000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
// JAVASCRIPT FOR REVIEW SECTION
let reviews = [
  {
    id: 0,
    img: "images/person.jpg",
    name: "Sanaya Verma",
    info:
      "Nice Restraunt with nice environment,nice people feels like heaven.repellat voluptas facilis quae fugit sit quibusdam. Blanditiis,qui culpa! Excellent restraunt I would say",
  },
  {
    id: 1,
    img: "images/person2.jpg",
    name: "Alexendra",
    info:
      "Very Good food with such kind of love they express when serving is amazing. Officia repellat voluptas facilis quae fugit sit quibusdam. Blanditiis, qui culpa!ksfj sfjsfoeff fkn",
  },
  {
    id: 2,
    img: "images/person3.jpg",
    name: "Andriana Botez",
    info:
      "Most recommended restraunt from my side visit once. Officia repellat voluptas facilis quae fugit sit quibusdam. Blanditiis,ksfj sfjsfoeff fkn Lorem some more reviews here",
  },
  {
    id: 3,
    img: "images/person4.jpg",
    name: "Ashwini Verma",
    info:
      "The variety of food available here is just amazing. Officia repellat voluptas facilis quae fugit sit quibusdam. Blanditiis, qui culpa!ksfj sfjsfoeff fkn voluptas. ",
  },
];
const img = document.getElementById("person_img");
const nam = document.getElementById("name");
const info = document.getElementById("work");

const prevBtn = document.querySelector(".backward");
const nextBtn = document.querySelector(".forward");
//Set Starting item
let currentItem = 0;
// Changing person info
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  nam.textContent = item.name;
  info.textContent = item.info;
}
// ON loading of the page
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
//Show next Person Reviews
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
//Show prev Person Reviews
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
