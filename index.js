function changeBg() {
  let navbar = document.getElementById("nav");
  let scrollValue = window.scrollY;
  if (scrollValue < 350) {
    navbar.classList.remove("bg-dark");
  } else if (scrollValue > 350) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.add("bg-dark");
  }
}

window.addEventListener("scroll", changeBg);
