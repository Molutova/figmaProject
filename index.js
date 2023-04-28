document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".my-button");
  btn.addEventListener("click", function () {
    const menuList = document.querySelector("ul");
    console.log(menuList);
    menuList.classList.add("toogle");
    document.querySelector("color-text");
    const colortxt = document.querySelector(".color-text");
    // colortxt.classList.remove("color-text");
  });
});
