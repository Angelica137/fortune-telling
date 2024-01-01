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

async function getCardImg() {
  const cards = await loadCardData();
  const cardImgs = cards.map((card) => card.img);
  console.log("Card images array", cardImgs);
  return cardImgs;
}

document.addEventListener("DOMContentLoaded", () => {
  let cardData = [];

  loadCardData().then((cards) => {
    if (cards) {
      cardData = cards;
      console.log("Loaded cards:", cardData);
    } else {
      console.log("Failed to load the cards");
    }
  });

  getCardImg()
    .then((cardImgs) => {
      console.log("returned card images", cardImgs);
    })
    .catch((error) => {
      console.error("Error in getCardImg:", error);
    });

  const fortuneButton = document.getElementById("fortuneButton");

  fortuneButton.addEventListener("click", () => {
    alert("Button clicked!");
  });
});
