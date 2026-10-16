
"use strict";

// Love Letter Button
const letterButton = document.getElementById("letter-button");
const letter = document.getElementById("letter");

letterButton.addEventListener("click", () => {
    letter.classList.toggle("hidden");

    const isHidden = letter.classList.contains("hidden");

    letterButton.textContent = isHidden
        ? "💌 Open This"
        : "💗 Close";

    letterButton.setAttribute("aria-expanded", String(!isHidden));
});

letterButton.setAttribute("aria-expanded", "false");


// Voice Message / Music Button
const music = document.getElementById("love-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent =
                "⏸️ Pause Our Song | ගීතය නවත්වන්න";
        } catch (error) {
            alert(
                "Audio file eka check karanna. music.mp3 file eka index.html ekka thiyena folder eke thiyenawada balanna."
            );
        }
    } else {
        music.pause();
        musicButton.textContent = "🎵 Play This";
    }
});

music.addEventListener("ended", () => {
    musicButton.textContent = "🎵 Play This";
});


// Surprise Button
const surpriseButton = document.getElementById("surprise-button");
const surprise = document.getElementById("surprise");

surpriseButton.addEventListener("click", () => {
    surprise.classList.toggle("hidden");

    const isHidden = surprise.classList.contains("hidden");

    surpriseButton.textContent = isHidden
        ? "🎁 One Last Surprise"
        : "💖 Hide";

    surpriseButton.setAttribute("aria-expanded", String(!isHidden));

    if (!isHidden) {
        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});

surpriseButton.setAttribute("aria-expanded", "false");


// Falling Hearts Animation
const heartsContainer = document.getElementById("hearts-container");
const heartSymbols = ["❤️", "💗", "💖", "💕", "💘"];

function createHeart() {
    const heart = document.createElement("span");
    heart.className = "falling-heart";
    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 450);

