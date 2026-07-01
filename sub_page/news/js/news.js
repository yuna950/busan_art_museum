const pages = document.querySelectorAll("li");

pages.forEach((li) => {
  li.addEventListener("click", () => {
    pages.forEach((item) => {
      item.classList.remove("page_active");
    });

    li.classList.add("page_active");
  });
});
