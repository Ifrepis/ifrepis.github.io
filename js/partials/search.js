export const searchInit = function () {
  let floatingLayer = document.querySelector(".floating-layer");

  let searchContainer = document.querySelector(".search-container");
  let searchInput = document.querySelector(".search-input");
  let searchContent = document.querySelector(".search-content");
  let searchIcon = document.querySelector(
    ".search-operate-container > .icon-sousuo"
  );
  let searchCloseIcon = document.querySelector(
    ".search-operate-container > .icon-close"
  );

  const className = "search-show-content";
  let data;
  axios.get("/search.json").then((res) => {
    data = res.data;
  });

  let valueChanges = () => {
    if (searchInput.value) {
      searchCloseIcon.classList.add("close-show");
    } else {
      searchCloseIcon.classList.remove("close-show");
    }
  };
  let search = () => {
    if (searchInput.value) {
      let value = searchInput.value.trim().toLowerCase();
      let filtered = data.filter((item) => {
        return (
          (item.title && item.title.toLowerCase().indexOf(value) !== -1) ||
          (item.content && item.content.toLowerCase().indexOf(value) !== -1)
        );
      });
      let itemsStr = "";
      if (filtered.length) {
        filtered.forEach((item) => {
          itemsStr += `<div class="search-content-item" onclick="window.location.href='${item.url}'">${item.title}</div>`;
        });
      } else {
        itemsStr =
          '<div class="search-content-item" style="text-align:center">暂无数据</div>';
      }
      searchContent.innerHTML = itemsStr;
      searchContainer.classList.add(className);
      floatingLayer.classList.add("floating-layer-show");
    }
    searchInput.focus();
  };
  let close = () => {
    if (searchInput.value) {
      searchInput.value = "";
      searchContainer.classList.remove(className);
      searchCloseIcon.classList.remove("close-show");
      searchContent.innerHTML = "";
      floatingLayer.classList.remove("floating-layer-show");
      searchInput.focus();
    }
  };

  floatingLayer.addEventListener("click", () => {
    if (searchInput.value) {
      searchContainer.classList.remove(className);
      floatingLayer.classList.remove("floating-layer-show");
      searchContent.innerHTML = "";
    }
  });
  searchInput.addEventListener("input", valueChanges);
  searchIcon.addEventListener("click", search);
  searchCloseIcon.addEventListener("click", close);
  return searchInit;
};
