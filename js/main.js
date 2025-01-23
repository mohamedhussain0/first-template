// Change Background when click on bullets
let landing = document.querySelector("body .landing");
let bulletsUl = document.querySelector(".landing .bullets");
let backgroundImgs = ["landing-1.jpg", "landing-2.jpg", "landing-3.jpg"];

// Create Bullets
backgroundImgs.forEach((img) => {
  let li = document.createElement("li");
  li.dataset.index = `${backgroundImgs.indexOf(img)}`;
  li.onclick = function () {
    if (!this.classList.contains("active")) {
      this.parentElement.querySelector(".active").classList.remove("active");
      this.classList.add("active");

      console.log(backgroundImgs[this.dataset.index]);
    }
  };
  bulletsUl.appendChild(li);
});
document.querySelectorAll(".landing .bullets li")[0].className = "active";
