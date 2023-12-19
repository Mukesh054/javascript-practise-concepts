// import { getSuggestion } from "./utils";
async function getSuggestion(value) {
  const controller = new AbortController();

  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    });
    const res = await data.json();
  } catch (error) {
    console.log("API call cancelled....")
    controller.abort();
  }

  //   return res
  //     .map((item) => item.name)
  //     .filter(
  //       (x) => x.substr(0, value.length).toLowerCase() === value.toLowerCase()
  //     );

  return [
    "Apple",
    "Mango",
    "Banana",
    "Apricot",
    "Avocado",
    "Lemon",
    "Guava",
  ].filter(
    (x) => x.substring(0, value.length).toLowerCase() === value.toLowerCase()
  );
}

const inputBox = document.getElementById("input-box");
const suggestionWrapper = document.querySelector(".suggestion-wrapper");

const resetData = () => {
  suggestionWrapper.classList.remove("suggestion-visible");
};

const renderItems = (list) => {
  const fragment = document.createDocumentFragment();

  list.forEach((item) => {
    let el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("dropdown-item");
    el.setAttribute("data-key", item);
    fragment.appendChild(el);
  });

  suggestionWrapper.innerHTML = "";
  suggestionWrapper.appendChild(fragment);
};

const handleSearch = async (value) => {
  const data = await getSuggestion(value);
  if (data.length) {
    suggestionWrapper.classList.add("suggestion-visible");
    renderItems(data);
  }
};

const handleChange = (e) => {
  const value = e.target.value;
  if (value) {
    handleSearch(value);
  } else {
    resetData();
  }
};

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(this, ...args);
      clearTimeout(timer);
    }, delay);
  };
}

const handleListItemClick = (e) => {
  const { key } = e.target.dataset;
  if (key) {
    inputBox.value = key;
    resetData();
  }
};

const debouncedFn = debounce(handleChange, 1000);

(() => {
  inputBox.addEventListener("input", debouncedFn);
  suggestionWrapper.addEventListener("click", handleListItemClick);
})();
