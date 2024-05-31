const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
      clickCounter++;
      if (imageItem - (4 + clickCounter) >= 0) {
        const computedStyle = window.getComputedStyle(movieLists[i]);
        const matrix = new WebKitCSSMatrix(computedStyle.transform);
        movieLists[i].style.transform = `translateX(${matrix.m41 - 300}px)`;
      } else {
        movieLists[i].style.transform = "translateX(0)";
      }
    });
  });
