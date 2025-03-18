// List of generic American names
const names = [
  "Liam", "Noah", "Oliver", "James", "Elijah", "William", "Benjamin",
  "Lucas", "Henry", "Alexander", "Mason", "Ethan", "Michael",
  "Daniel", "Matthew", "Aiden", "Jackson", "Logan", "David",
  "Joseph", "Samuel", "Sebastian", "Carter", "Owen"
];

// Rarity levels
const rarityLevels = ["Common", "Uncommon", "Rare", "Legendary"];

// Function to generate a random character
function generateCharacter() {
  // Randomly select a name
  const randomName = names[Math.floor(Math.random() * names.length)];

  // Randomly select a rarity level
  const randomRarity = rarityLevels[Math.floor(Math.random() * rarityLevels.length)];

  // Get the display element
  const characterDisplay = document.getElementById("character-display");

  // Update the display with the name and rarity
  characterDisplay.innerHTML = `Name: <strong>${randomName}</strong> | Rarity: <strong>${randomRarity}</strong>`;

  // Add a class to style based on rarity
  characterDisplay.className = `character ${randomRarity.toLowerCase()}`;
}
