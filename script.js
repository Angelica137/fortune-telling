// fetching data from the JSON file to load it into JS file
async function loadCardData() {
  try {
    const response = await fetch("tarot-images.json");
    const data = await response.json();
    return data.cards;
  } catch (error) {
    console.error("Error leading card data:", error);
  }
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

  const fortuneButton = document.getElementById("fortuneButton");

  fortuneButton.addEventListener("click", () => {
    alert("Button clicked!");
  });
});
