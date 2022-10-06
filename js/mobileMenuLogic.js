const hamburgerBtn = document.querySelector("button.hamburger");
const links = document.querySelector(".links");
const overlay = document.querySelector(".overlay");

const handleToggleMobileMenu = () => {
  if (links.classList.contains("open")) {
    links.classList.remove("open");
    overlay.classList.remove("open");
    hamburgerBtn.style.transform = "rotate(0deg)";
  } else {
    links.classList.add("open");
    overlay.classList.add("open");
    hamburgerBtn.style.transform = "rotate(360deg)";
  }
};

hamburgerBtn.addEventListener("click", handleToggleMobileMenu);
overlay.addEventListener("click", handleToggleMobileMenu);
