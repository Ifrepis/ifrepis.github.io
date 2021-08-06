import { sidebarInit } from "./partials/sidebar.js";
import { actionsBarInit } from "./partials/actions-bar.js";
sidebarInit();
let actionsBarContainer = actionsBarInit();
document.addEventListener("click", () => {
  actionsBarContainer.classList.remove("actions-bar-show");
});
