/**
 * Dynamically injects a download link paragraph into a specified container.
 * @param {string} containerId - The ID of the parent element where the link should go.
 * @param {string} albumName - The display name of the game album.
 * @param {string} branchName - The GitHub repository branch name for the zip file.
 */
function injectDownloadLink(containerId, albumName, branchName) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container with ID "${containerId}" not found.`);
    return;
  }

  // Create the parent paragraph with a class instead of an ID
  const p = document.createElement('p');
  p.className = "downloadLinks";

  // Create the album name span
  const span = document.createElement('span');
  span.className = "gold";
  span.textContent = albumName + " album";

  // Create the actual download link
  const a = document.createElement('a');
  a.className = "dLink";
  a.href = `https://github.com/Reper2/switch-album/archive/refs/heads/${branchName}.zip`;
  a.textContent = "Download";

  // Create the line break
  const br = document.createElement('br');

  // Assemble the structure
  p.appendChild(span);
  p.appendChild(document.createTextNode(' ')); // Visual spacing
  p.appendChild(a);
  p.appendChild(br);

  // Inject into the page
  container.appendChild(p);
}

// Automatically execute once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const targetContainer = "downloadLinks";
  const a = targetContainer + "A";
  const b = targetContainer + "B";
  const c = targetContainer + "C";
  const d = targetContainer + "D"; 

  // --- Group A (A - H) ---
  injectDownloadLink(a, "Animal Crossing: New Horizons", "acnh");
  injectDownloadLink(a, "Donkey Kong Bonanza", "dkb");
  injectDownloadLink(a, "Hyrule Warriors: Age of Imprisonment", "hw-aoi");

  // --- Group B (K - LOZ) ---
  injectDownloadLink(b, "Kirby and the Forgotten Land", "katfl");
  injectDownloadLink(b, "Luigi's Mansion 3", "lm3");
  injectDownloadLink(b, "The Legend of Zelda: Breath of the Wild", "loz-botw");
  injectDownloadLink(b, "The Legend of Zelda: Echoes of Wisdom", "loz-eow");
  injectDownloadLink(b, "The Legend of Zelda: Skyward Sword", "loz-ss");
  injectDownloadLink(b, "The Legend of Zelda: Tears of the Kingdom", "loz-totk");

  // --- Group C (M - P) ---
  injectDownloadLink(c, "Miitopia", "miitopia");
  injectDownloadLink(c, "Mario Kart 8 Deluxe", "mk8dx");
  injectDownloadLink(c, "Mario Kart World", "mkw");
  injectDownloadLink(c, "Mario Party Jamboree", "mpj");
  injectDownloadLink(c, "Mario Party Superstars", "mps");
  injectDownloadLink(c, "Pikmin 4", "pik4");
  injectDownloadLink(c, "Paper Mario: The Thousand-Year Door", "pm-ttyd");

  // --- Group D (Pokémon & Super Mario / Smash / Tomodachi) ---
  injectDownloadLink(d, "Pokémon Legends: Arceus", "poke-la");
  injectDownloadLink(d, "Pokémon Sword", "poke-sword");
  injectDownloadLink(d, "Super Mario 3D All-Stars", "sm3da");
  injectDownloadLink(d, "Super Mario 3D World + Bowser's Fury", "sm3dw_bf");
  injectDownloadLink(d, "Super Mario Bros. Wonder", "smbw");
  injectDownloadLink(d, "Super Mario Galaxy 2", "smg2");
  injectDownloadLink(d, "Super Mario Odyssey", "smo");
  injectDownloadLink(d, "Super Mario Party", "smp");
  injectDownloadLink(d, "Super Smash Bros. Ultimate", "ssbu");
  injectDownloadLink(d, "Tomodachi Life: Living the Dream", "tlltd");
});