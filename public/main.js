const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseover", () => {
    portfolioItem.children[0].classList.add("img-darken");
  });
});

portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseout", () => {
    portfolioItem.children[0].classList.remove("img-darken");
  });
});
