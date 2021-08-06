export const sidebarInit = () => {
  let sidebarButton = document.querySelector(".sidebar-button");
  let sidebarContainer = document.querySelector(".sidebar-container");
  let floatingLayer = document.querySelector(".floating-layer");

  sidebarButton.addEventListener("click", () => {
    sidebarContainer.classList.add("sidebar-show");
    floatingLayer.classList.add("floating-layer-show");
  });
  let closeSidebar = () => {
    sidebarContainer.classList.remove("sidebar-show");
    floatingLayer.classList.remove("floating-layer-show");
  };
  floatingLayer.addEventListener("click", closeSidebar);
};
