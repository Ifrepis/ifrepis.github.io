import { sidebarInit } from "./partials/sidebar.js";
import { actionsBarInit } from "./partials/actions-bar.js";
import { searchInit } from "./partials/search.js";
sidebarInit();
let actionsBarContainer = actionsBarInit();
document.addEventListener("click", () => {
  actionsBarContainer.classList.remove("actions-bar-show");
});
searchInit()
