import "./style.scss";

let numActiveMovie = 1;
const NB_TOTAL_MOVIES = 3;

function onClickLeftArrow() {
  if (numActiveMovie > 1) {
    numActiveMovie--;

    const oldMovieHtmlElements = document.querySelectorAll(`.movie-${numActiveMovie + 1}`);
    const newMovieHtmlElements = document.querySelectorAll(`.movie-${numActiveMovie}`);

    oldMovieHtmlElements.forEach((elt) => elt.classList.remove("active"));
    newMovieHtmlElements.forEach((elt) => elt.classList.add("active"));
  }
}

function onClickRightArrow() {
  if (numActiveMovie < 3) {
    numActiveMovie++;

    const oldMovieHtmlElements = document.querySelectorAll(`.movie-${numActiveMovie - 1}`);
    const newMovieHtmlElements = document.querySelectorAll(`.movie-${numActiveMovie}`);

    oldMovieHtmlElements.forEach((elt) => elt.classList.remove("active"));
    newMovieHtmlElements.forEach((elt) => elt.classList.add("active"));
  }
}

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.onclick = onClickLeftArrow;
rightArrow.onclick = onClickRightArrow;
