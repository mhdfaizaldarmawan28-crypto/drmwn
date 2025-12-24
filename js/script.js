/* ================= PROTECT PAGE ================= */
if (
  !localStorage.getItem("authorized") &&
  !window.location.pathname.includes("login.html")
) {
  window.location.href = "login.html";
}


/* ================= MUSIC ================= */
const music = document.getElementById("bgMusic");
let isPlaying = true;

function toggleMusic(){
  if(music){
    isPlaying ? music.pause() : music.play();
    isPlaying = !isPlaying;
  }
}

/* ================= LIGHTBOX ================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if(lightbox && lightboxImg){
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });
}

function closeLightbox() {
  if(lightbox) lightbox.style.display = "none";
}

/* ================= EMAIL GATE ================= */

// DAFTAR EMAIL YANG BOLEH MASUK
const allowedEmails = [
  "mhdfaizaldarmawan28@gmail.com",
  "muhammadfaizaldarmawan@gmail.com",
  "riznaputrisania03@gmail.com"
];

function checkEmail() {
  const input = document.getElementById("emailInput").value.trim().toLowerCase();
  const error = document.getElementById("loginError");

  if (allowedEmails.includes(input)) {
    localStorage.setItem("authorized", "true");
    window.location.href = "index.html";
  } else {
    error.innerText = "❌ Email tidak terdaftar";
  }
}
