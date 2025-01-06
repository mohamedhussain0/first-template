let header = document.getElementsByTagName("header")[0];
let UPbtn = document.getElementById("up-btn");

window.onscroll = () => {
  if (scrollY <= 900) header.style.position = "fixed";
  else header.style.position = "absolute";

  if (scrollY >= 900) UPbtn.style.display = "block";
  else UPbtn.style.display = "none";
};

// up onclick button
UPbtn.onclick = function () {
  window.scrollTo(0, 0);
};
