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

//extract the value of "img" for each card an add it to an array
async function getCardImgs() {
  const cards = await loadCardData();
  const cardImgs = cards.map((card) => card.img);
  return cardImgs;
}

// pick a card at random from the above array
// Do I need to do this in one step? Probably it is for the best
async function pullRandomCard() {
  const getDeck = await getCardImgs();
  const randomCard = Math.floor(Math.random() * getDeck.length);
  return "cards/" + getDeck[randomCard];
}

document.addEventListener("DOMContentLoaded", () => {
  const fortuneButton = document.getElementById("fortuneButton");
  const cardReveal = document.getElementById("cardReveal");

  fortuneButton.addEventListener("click", async () => {
    const cardPath = await pullRandomCard();
    cardReveal.src = cardPath;
    cardReveal.style.display = "block";
    //alert("Button clicked!");
  });
});
