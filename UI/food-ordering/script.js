let restaurantsData = [
  {
    id: 1,
    name: "Zomato",
    tag: ["Indian", "Fast food", "Chinese"],
    ETA: 12,
    location: "Chadigarh",
    rating: 4,
  },
  {
    id: 2,
    name: "Guxxt",
    tag: ["Indian", "Chinese"],
    ETA: 23,
    location: "Jamnagar",
    rating: 5,
  },
  {
    id: 3,
    name: "Paypu",
    tag: ["Indian"],
    ETA: 56,
    location: "Jaipur",
    rating: 3,
  },
  {
    id: 4,
    name: "Swiggy",
    tag: ["Chinese"],
    ETA: 12,
    location: "Delhi",
    rating: 2,
  },
  {
    id: 5,
    name: "Barbeque",
    tag: ["Fast food", "Chinese"],
    ETA: 16,
    location: "Gurgaon",
    rating: 4,
  },
];

let favoritesRestaurants = [];
let restaurants = [];
const restaurantsWrapper = document.querySelector(".restaurants-wrapper");
const showFavoritesBtn = document.querySelector(".show-favorites-btn");
const sortBy = document.querySelector("#sort_by");
const filterByTag = document.querySelector("#filter_by_tag");
const searchText = document.querySelector("#search-text");

searchText.addEventListener("keyup", (e) => {
  removeAllCards();
  const res = restaurants.filter((obj) =>
    JSON.stringify(obj).toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(res);
  renderCards(res);
});

sortBy.addEventListener("change", (e) => {
  if(!e.target.value) return;

  removeAllCards();
  if (e.target.value === "rating") {
    restaurants.sort((a, b) => a[e.target.value] - b[e.target.value]);
  } else {
    restaurants.sort((a, b) =>
      a[e.target.value].localeCompare(b[e.target.value])
    );
  }
  renderCards(restaurants);
});

filterByTag.addEventListener("change", (e) => {
  if(!e.target.value) return;
  
  removeAllCards();
  let filterByTagRestaurants = [];
  filterByTagRestaurants = restaurants.filter((restaurant, i) =>
    restaurant.tag.includes(e.target.value)
  );
  renderCards(filterByTagRestaurants);
});

showFavoritesBtn.addEventListener("click", (e) => {
  removeAllCards();
  if (!Array.from(e.target.classList).includes("showing-favorites")) {
    renderCards(favoritesRestaurants);
  } else {
    renderCards(restaurants);
  }
  e.target.classList.toggle("showing-favorites");
});

restaurantsWrapper.addEventListener(
  "click",
  (e) => {
    if (e.target.id) {
      e.target.classList.toggle("isFavorite");

      if (!checkIfFavoriteExists(+e.target.id)) {
        console.log(e.target.id);
        const restaurant = restaurants.find(({ id }) => id === +e.target.id);
        favoritesRestaurants.push(restaurant);
      } else {
        console.log(favoritesRestaurants);
        favoritesRestaurants = [...favoritesRestaurants].filter(
          (restaurant) => restaurant.id !== +e.target.id
        );
      }

      localStorage.setItem("favorites", JSON.stringify(favoritesRestaurants));
    }
  },
  false
);

async function init() {
  if (localStorage.getItem("favorites")) {
    favoritesRestaurants = JSON.parse(localStorage.getItem("favorites"));
  }

  restaurants = await getRestaurants();
  renderCards(restaurants);
}
init();

function removeAllCards() {
  document.querySelectorAll(".card").forEach((el) => el.remove());
}

function renderCards(restaurantList) {
  restaurantList.forEach((restaurant, i) => {
    getCard(restaurant);
  });
}

function getCard(restaurant) {
  let listTemplate = document.getElementById("list-item-template");
  const item = listTemplate.content.cloneNode(true);
  item.querySelector(".heading-text").innerText = restaurant.name;
  item.querySelector(".location").innerText = restaurant.location;
  item.querySelector(".rating").innerText = restaurant.rating;
  item.querySelector(".mark-favourite").id = restaurant.id;
  if (checkIfFavoriteExists(restaurant.id)) {
    item.querySelector(".mark-favourite").classList.add("isFavorite");
  }

  item.querySelector(".tags").innerText = restaurant.tag.join(", ");
  restaurantsWrapper.append(item);
}

function checkIfFavoriteExists(restaurantId) {
  return favoritesRestaurants
    .map((restaurant) => restaurant.id)
    .includes(restaurantId);
}

async function getRestaurants() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return restaurantsData;
}
