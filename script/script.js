// navbar menu
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Routing function
const route = (event) => {
  event.preventDefault();
  const path = event.target.getAttribute('href');
  window.history.pushState({}, "", path);
  handleLocation();
};

const routes = {
  "/": "/index.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((response) => response.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
