const card = document.querySelector("#card");

function flipCard() {
  card.classList.toggle("flip-card");
}

card.addEventListener("click", flipCard);
