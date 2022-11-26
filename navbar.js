const homeLink = document.querySelector(".home-link");
const articleLink = document.querySelector(".article-link");

homeLink.onclick = function () {
  homeLink.classList.add("active-link");
  articleLink.classList.remove("active-link");
};

articleLink.onclick = function () {
  articleLink.classList.add("active-link");
  homeLink.classList.remove("active-link");
};
