let ul = document.querySelectorAll("#workCatag li");
let liList = Array.from(ul);
addActive(liList, ["active", "rounded-pill"]);
let linksUl = document.querySelectorAll(".navbar-nav a");
let linkList = Array.from(linksUl);
addActive(linkList, ["active"]);

function addActive(elementList = [], theClassList = []) {
  let linkList = elementList;
  linkList.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      linkList.forEach((ele) => {
        for (let i of theClassList) {
          ele.classList.remove(i);
        }
      });
      for (let i of theClassList) {
        e.target.classList.add(i);
      }
    });
  });
}
let buttn = document.querySelector(".up");

window.onscroll = () => {
  if (window.scrollY > 1000) {
    buttn.style.opacity = ".3";
    buttn.style.display = "block";
  }
  if (window.scrollY > 1600) {
    buttn.style.opacity = "1";
  } else if (window.scrollY > 1200) {
    buttn.style.opacity = ".5";
  } else {
    buttn.style.opacity = "0";
    buttn.style.display = "none ";
  }
};

console.log();
buttn.onclick = () => {
  window.scrollTo(0, 0);
};
