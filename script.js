// Run after the entire DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.querySelector(".play-button");

  console.log("Script loaded ✅");

  if (playBtn) {
    playBtn.addEventListener("click", function () {
      console.log("✅ Play button clicked");

      if (playBtn.classList.contains("fa-play-circle")) {
        playBtn.classList.remove("fa-play-circle");
        playBtn.classList.add("fa-pause-circle");
      } else {
        playBtn.classList.remove("fa-pause-circle");
        playBtn.classList.add("fa-play-circle");
      }
    });
  } else {
    console.log("⚠️ .play-button not found!");
  }
});
