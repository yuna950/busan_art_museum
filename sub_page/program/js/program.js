const tags = document.querySelectorAll(".tag");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    // 기존 활성화 제거
    tags.forEach((item) => {
      item.classList.remove("tag_active");
    });

    // 클릭한 태그 활성화
    tag.classList.add("tag_active");
  });
});
