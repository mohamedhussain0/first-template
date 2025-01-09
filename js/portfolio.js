let portfolioSec = document.querySelector("#portfolio");
let portfolioContainer = document.querySelector("#portfolio .container");
let shuffleUl = document.querySelector("#portfolio .container .shuffle");
let lis = ["All", "App", "Photo", "Web", "Print"];
let lengthLiShuffle = lis.length;
// Creat shuffle ul and append them in portfolio's container
{
  /* For Ex: Create shuffle ul
  <ul class="shuffle">
    <li class="active">All</li>
    <li>App</li>
    <li>Photo</li>
    <li>Web</li>
    <li>Print</li>
  </ul>
  */

  for (let i = 0; i < lengthLiShuffle; i++) {
    let li = document.createElement("li");
    li.classList.add(lis[i]);
    li.append(document.createTextNode(lis[i])); // <li>All</li>
    li.onclick = () => {
      activeShuffle(i);
      sortBoxes(lis[i]);
    }; // Call The Func when click on it
    shuffleUl.appendChild(li); //<ul class="shuffle"> <li>All</li> </ul>
  }

  shuffleUl.firstElementChild.classList.add("active");
  portfolioContainer.appendChild(shuffleUl);
}

function activeShuffle(ind) {
  let Lis = document.querySelectorAll(".shuffle li");

  for (let li of Lis) {
    if (li.classList.contains("active")) li.classList.remove("active");
  }

  Lis[ind].classList.add("active");
}
//

// ====================================

// Create Boxes
let boxs_Container = document.querySelector("#portfolio > .imgs-container");
let boxesSRC = [
  "Files/shuffle-01.jpg",
  "Files/shuffle-02.jpg",
  "Files/shuffle-03.jpg",
  "Files/shuffle-04.jpg",
  "Files/shuffle-05.jpg",
  "Files/shuffle-06.jpg",
  "Files/shuffle-07.jpg",
  "Files/shuffle-08.jpg",
];
let boxesHEAD = [
  "Awesome Image",
  "Awesome Image",
  "Awesome Image",
  "Awesome Image",
  "Awesome Image",
  "Awesome Image",
  "Awesome Image",
  "Awesome Image",
];
let boxesPARAGRAPH = [
  "Photography",
  "Photography",
  "Photography",
  "Photography",
  "Photography",
  "Photography",
  "Photography",
  "Photography",
];
let boxesCATAGORY = [
  "App",
  "Photo",
  "Web",
  "App",
  "App",
  "Photo",
  "Web",
  "Print",
];
/* For Ex: Create Box
<div class="box">
  <img src="Files/shuffle-01.jpg" alt />
  <div class="caption">
    <h3>Awesome Image</h3>
    <p>Photography</p>
  </div>
</div>
*/
{
  leng = boxesSRC.length;
  for (let i = 0; i < leng; i++) {
    let box = document.createElement("div");
    box.classList.add("box", boxesCATAGORY[i]);
    let img = document.createElement("img");
    img.src = boxesSRC[i];
    img.alt = boxesCATAGORY[i];

    let cap = document.createElement("div");
    cap.className = "caption";
    let h3 = document.createElement("h3");
    h3.appendChild(document.createTextNode(boxesHEAD[i]));
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(boxesPARAGRAPH[i]));

    cap.append(h3, p);
    box.append(img, cap);
    boxs_Container.appendChild(box);
  }
}
// ====================================

// Sort Boxes
function sortBoxes(catagory) {
  if (catagory === "All") {
    for (let box of boxs_Container.children) {
      box.style.display = "block";
    }
  } else {
    for (let box of boxs_Container.children) {
      if (box.classList.contains(catagory)) {
        box.style.display = "block";
      } else box.style.display = "none";
    }
  }
}

// Add More Button Link
// <a href="#" class="more">more</a>
{
  let a = document.createElement("a");
  a.setAttribute("href", "#");
  a.classList.add("more");
  a.append(document.createTextNode("more"));
  portfolioSec.appendChild(a);
}
