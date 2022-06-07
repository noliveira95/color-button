const about = document.querySelector(".about");
const tabBtns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.set;
  // If target has a data-set, hide other elements and display target
  if (id) {
    removeActiveBtns();
    e.target.classList.add("active");
    removeActiveContent();
    const article = document.getElementById(id);
    article.classList.add("active");
  }
});

// Removes active class from all btns
let removeActiveBtns = () => {
  tabBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

// Removes active class from all articles
let removeActiveContent = () => {
  content.forEach((article) => {
    article.classList.remove("active");
  });
};
