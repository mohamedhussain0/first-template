let header = document.getElementsByTagName("header")[0];
let UPbtn = document.getElementById("up-btn");

window.onscroll = () => {
  if (scrollY >= 900) UPbtn.style.bottom = "15px"
  else UPbtn.style.bottom = "-40px"
};

// up onclick button
UPbtn.onclick = function () {
  window.scrollTo(0, 0);
};
