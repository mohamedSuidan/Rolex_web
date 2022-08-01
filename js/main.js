let btn = document.querySelector(".bx.bx-grid-alt");
let nav = document.querySelector(".links");
let num = 0;
let opinion = document.querySelector(".opinion");
let arrow = document.querySelectorAll(".arrow i");
btn.onclick = () => {
  nav.classList.toggle("active");
};

arrow.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (e.target.dataset.dir == "right") {
      num += 33;
      if (num == 99) {
        num = 0;
      }
      opinion.style.transform = `translateX(-${num}%)`;
    } else {
      num -= 33;
      if (num < 0) {
        num = 66;
      }
      opinion.style.transform = `translateX(-${num}%)`;
    }
  });
});

window.onscroll = () => {
  if (scrollY >= 400) {
    document.querySelector(".top i").classList.add("show");
  } else {
    document.querySelector(".top i").classList.remove("show");
  }
};
document.querySelector(".top i").onclick = () => {
  scrollTo(0, 0);
};
