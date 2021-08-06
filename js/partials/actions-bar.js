export const actionsBarInit = function () {
  let actionsBarButton = document.querySelector(".actions-bar-button");
  let actionsBarContainer = document.querySelector(".actions-bar-container");
  actionsBarButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const className = "actions-bar-show";
    if (actionsBarContainer.classList.contains(className)) {
      actionsBarContainer.classList.remove(className);
    } else {
      actionsBarContainer.classList.add(className);
    }
  });
  return actionsBarContainer;
};
