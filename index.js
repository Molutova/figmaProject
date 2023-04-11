document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".burger-menu-box");
  btn.addEventListener("click", function () {
    const menuList = document.querySelector("ul");
    console.log(menuList);
    menuList.classList.add("toogle");
  });
});
