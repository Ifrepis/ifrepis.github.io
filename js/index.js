import { sidebarInit } from "./partials/sidebar.js";
import { actionsBarInit } from "./partials/actions-bar.js";
sidebarInit();
let actionsBarContainer = actionsBarInit();
document.addEventListener("click", () => {
  actionsBarContainer.classList.remove("actions-bar-show");
});
let bodyContainerContent = document.querySelector(".body-container-content");
let aElements = [...document.getElementsByTagName("a")];
aElements.forEach((element) => {
  let href = element.hash;
  if (element.className != "headerlink" && href[0] === "#" && href != "#") {
    element.addEventListener("click", (event) => {
      let postElement = aElements
        .filter(
          (element) =>
            element.className == "headerlink" && href[0] === "#" && href != "#"
        )
        .find((e) => {
          return e.title === event.target.innerHTML;
        });
      setTimeout(() => {
        bodyContainerContent.scrollTo({
          top: postElement.offsetTop - 65,
          behavior: "smooth",
        });
      });
    });
  }
});
