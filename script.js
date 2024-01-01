// fetching data from the JSON file to load it into JS file
async function loadCardData() {
  try {
    const response = await fetch("tarot-images.json");
    const data = await response.json();
    return data.cards;
  } catch (error) {
    console.error("Error loading card data:", error);
  }
}

// pick a card at random from the above array
// Do I need to do this in one step? Probably it is for the best
async function pullRandomCard() {
  const getDeck = await loadCardData();
  const randomCard = Math.floor(Math.random() * getDeck.length);
  //return "cards/" + getDeck[randomCard];
  return getDeck[randomCard];
}

function displayFortune(card) {
  const cardFortuneElement = document.getElementById("cardFortune");
  if (card && card.fortune_telling) {
    cardFortuneElement.textContent = card.fortune_telling.join(", ");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const fortuneButton = document.getElementById("fortuneButton");
  const cardReveal = document.getElementById("cardReveal");

  fortuneButton.addEventListener("click", async () => {
    const card = await pullRandomCard();
    cardReveal.src = "cards/" + card.img;
    cardReveal.style.display = "block";
    displayFortune(card);
  });
});
