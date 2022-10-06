// select all tab buttons in the portrait page
const tabBtns = document.querySelectorAll(".tab-btn");
const imagesContainer = document.querySelector(".images");

// by default the first tab is active
tabBtns[0].classList.add("active");

const removeAllActiveClasses = () => {
  tabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
};

const handleSwitchTabs = (e) => {
  imagesContainer.style.transform = `translateX(${e.target.id})`;
  removeAllActiveClasses();
  e.target.classList.add("active");
};

tabBtns.forEach((tabBtn) => tabBtn.addEventListener("click", handleSwitchTabs));
