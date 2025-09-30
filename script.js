document.addEventListener("DOMContentLoaded", function() {

  // Floating hearts
  function createParticle() {
    const particle = document.createElement("div");
    particle.innerHTML = "❤";
    particle.style.position = "absolute";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = "100vh";
    particle.style.fontSize = (10 + Math.random() * 20) + "px";
    particle.style.opacity = 0.6;
    particle.style.color = "#ff7eb3";
    particle.style.animation = `floatUp ${3 + Math.random() * 5}s linear forwards`;
    document.getElementById("particles").appendChild(particle);
    setTimeout(() => particle.remove(), 6000);
  }
  setInterval(createParticle, 400);

  // Add keyframes for hearts
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes floatUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-120vh); opacity: 0; }
  }`;
  document.head.appendChild(style);

  // Lyrics popup
  const lyrics = [
    "I miss the way you made me smile 💖",
    "Every moment with you felt like magic ✨",
    "My heart still beats only for you 🌸",
    "You are and always will be my forever 💕"
  ];

  let index = 0;
  const lyricsContainer = document.getElementById("lyrics");

  function showLyrics() {
    lyricsContainer.textContent = lyrics[index];
    index = (index + 1) % lyrics.length;
  }

  setInterval(showLyrics, 5000);
  showLyrics();
// Music play button
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-music-btn");

playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none"; // hide button after clicking
});

});
