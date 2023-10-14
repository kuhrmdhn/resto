// Show Special Dish List
const specialDish = document.getElementById("specialDish");
const dishList = document.getElementById("dishList");
// Show
specialDish.addEventListener("mouseover", () => {
  dishList.style.display = "block";
  dishList.style.opacity = "1";
});
// Hide
specialDish.addEventListener("mouseleave", () => {
  dishList.style.display = "none";
  dishList.style.opacity = "0";
});

// Mobile Navbar to Display Navigate Menu
const barsMenu = document.getElementById("barsMenu");
function handleMobileMenu() {
  mobileNavigation.classList.toggle("top-12");
}
const mobileNavigation = document.getElementById("mobileNavigation");
barsMenu.addEventListener("click", handleMobileMenu);

// Close Mobile Navbar Menu when User Click Navigate
const mobileNavigate = document.querySelectorAll(".mobile-navigate");
mobileNavigate.forEach((navigate) => {
  navigate.addEventListener("click", handleMobileMenu);
});

// Handle Navbar for Displaying in Desktop/Mobile
const desktopNavbar = document.getElementById("desktopNavbar");
const mobileNavbar = document.getElementById("mobileNavbar");
window.addEventListener("resize", () => {
  if (window.innerWidth <= 930) {
    mobileNavbar.style.display = "block";
    desktopNavbar.style.display = "none";
  } else {
    mobileNavbar.style.display = "none";
    desktopNavbar.style.display = "block";
  }
});
window.addEventListener("load", () => {
  if (window.innerWidth <= 930) {
    mobileNavbar.style.display = "block";
    desktopNavbar.style.display = "none";
  } else {
    mobileNavbar.style.display = "none";
    desktopNavbar.style.display = "block";
  }
});

// Slide Image
const images = [
  "./src/images/hero-1.jpg",
  "./src/images/hero-2.jpg",
  "./src/images/hero-3.jpg",
];
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const heroImage = document.getElementById("heroImage");
let imageIndex = 0;
setInterval(() => {
  imageIndex === images.length - 1 ? (imageIndex = 0) : imageIndex++;
  heroImage.setAttribute("src", images[imageIndex]);
}, 7000);
window.addEventListener("DOMContentLoaded", () =>
  heroImage.setAttribute("src", images[imageIndex])
);
prevButton.addEventListener("click", () => {
  imageIndex == 0 ? (imageIndex = images.length - 1) : imageIndex--;
  heroImage.setAttribute("src", images[imageIndex]);
});
nextButton.addEventListener("click", () => {
  imageIndex === images.length - 1 ? (imageIndex = 0) : imageIndex++;
  heroImage.setAttribute("src", images[imageIndex]);
});

// Chef Info
const chefInfo = document.querySelectorAll(".chef-info");
const hiddenInfo = document.querySelectorAll(".hidden-info");

for (let i = 0; i < chefInfo.length; i++) {
  chefInfo[i].addEventListener("mouseover", () => {
    chefInfo[i].style.height = "25%";
    // hiddenInfo[i].style.display = "block";
    hiddenInfo[i].style.opacity = "1";
  });

  chefInfo[i].addEventListener("mouseleave", () => {
    chefInfo[i].style.height = "16.666667%";
    // hiddenInfo[i].style.display = "none";
    hiddenInfo[i].style.opacity = "0";
  });
}