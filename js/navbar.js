const // button link
  homeLink = document.querySelector(".home-link"),
  articleLink = document.querySelector(".article-link"),
  aboutLink = document.querySelector(".about-link"),
  // other
  body = document.querySelector("body"),
  header = document.querySelector("header"),
  toggleOpenBtn = document.querySelector(".toggleOpenBtn"),
  toggleCloseBtn = document.querySelector(".toggleCloseBtn"),
  overlay = document.querySelector(".overlay");

// add underline for link in navbar
homeLink.onclick = function () {
  homeLink.classList.add("active-link");
  articleLink.classList.remove("active-link");
  aboutLink.classList.remove("active-link");
};

articleLink.onclick = function () {
  homeLink.classList.remove("active-link");
  articleLink.classList.add("active-link");
  aboutLink.classList.remove("active-link");
};

aboutLink.onclick = function () {
  homeLink.classList.remove("active-link");
  articleLink.classList.remove("active-link");
  aboutLink.classList.add("active-link");
};

// open-navvigation
toggleOpenBtn.addEventListener("click", () => {
  body.classList.add("openNav");
  header.classList.add("openNav");
});

toggleCloseBtn.addEventListener("click", () => {
  body.classList.remove("openNav");
  header.classList.remove("openNav");
});

overlay.addEventListener("click", () => {
  body.classList.remove("openNav");
  header.classList.remove("openNav");
});

// switchMode
function switchMode() {
  body.classList.toggle("light");
}
