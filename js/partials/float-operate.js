export const floatOperateInit = function () {
  let bodyContainerContent = document.querySelector(".body-container-content");
  let searchInput = document.querySelector(".search-input");

  let floatOperate = document.querySelector(".float-operate-container");
  let floatOperateSousuo = document.querySelector(
    ".float-operate-container > .icon-sousuo"
  );
  let floatOperateTop = document.querySelector(
    ".float-operate-container > .icon-jiantou"
  );
  bodyContainerContent.addEventListener("scroll", (v) => {
    let scrollTop = v.target.scrollTop;
    if (scrollTop > 500) {
      floatOperate.classList.add("float-operate-show");
    } else {
      floatOperate.classList.remove("float-operate-show");
    }
  });

  if (floatOperateSousuo) {
    floatOperateSousuo.addEventListener("click", () => {
      bodyContainerContent.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      searchInput.focus({
        preventScroll: true,
      });
    });
  }
  if (floatOperateTop) {
    floatOperateTop.addEventListener("click", () => {
      bodyContainerContent.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
};
floatOperateInit();
