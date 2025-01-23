// Open and Close Menu
let menuDiv = document.querySelector("header nav .menu");
let linksContainer = document.querySelector("header nav .links");

menuDiv.onclick = function () {
  linksContainer.classList.toggle("open");
};

//
let homeLink = document.querySelector(`header .links a[href="#home"]`);
homeLink.onclick = () => window.scroll(0, 0);
