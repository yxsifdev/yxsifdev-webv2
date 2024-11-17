function showSearchModal() {
  const searchBtnModal = document.getElementById("search-action");
  const searchModal = document.getElementById("search-modal");
  const closeSearchModal = document.getElementById("close-search-modal");

  if (searchBtnModal && searchModal && closeSearchModal) {
    searchBtnModal.addEventListener("click", () => {
      if (searchModal.classList.contains("hidden")) {
        searchModal.classList.replace("hidden", "flex");
      }
    });
    closeSearchModal.addEventListener("click", () => {
      if (searchModal.classList.contains("flex")) {
        searchModal.classList.replace("flex", "hidden");
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "k" && event.ctrlKey) {
        event.preventDefault();
        if (searchModal.classList.contains("hidden")) {
          searchModal.classList.replace("hidden", "flex");
        }
      }
    });
  }
}

document.addEventListener("astro:page-load", showSearchModal);

// Search Input
import { NavRedirect } from "../consts/links";
const searchValue = document.getElementById("search-value") as HTMLInputElement;

const updateSearchResults = () => {
  const searchQuery = searchValue?.value;
  if (searchQuery === "") return;
  const filteredResults = NavRedirect.filter((nav) =>
    nav.label.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const resultsContainer = document.getElementById("search-results");

  if (resultsContainer) {
    resultsContainer.classList.replace("visible", "hidden");
    setTimeout(() => {
      resultsContainer.innerHTML = "";
      if (filteredResults.length > 0) {
        filteredResults.forEach((result) => {
          const resultElement = document.createElement("div");
          resultElement.className = "p-2 rounded-md bg-white/5";
          resultElement.innerHTML = `<a href="${result.to}">${result.label}</a>`;
          resultsContainer?.appendChild(resultElement);
        });
      } else {
        const noResultsElement = document.createElement("div");
        noResultsElement.className = "p-2 rounded-md bg-white/5";
        noResultsElement.textContent = "No se encontraron resultados.";
        resultsContainer?.appendChild(noResultsElement);
      }
      resultsContainer.classList.replace("hidden", "visible");
    }, 300);
  }
};

searchValue?.addEventListener("input", updateSearchResults);
