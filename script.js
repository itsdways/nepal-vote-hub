// POLL

let votesA = 0;
let votesB = 0;

function vote(party) {

  if (party === "A") votesA++;
  if (party === "B") votesB++;

  document.getElementById("pollResult").innerText =
    `Party A: ${votesA} | Party B: ${votesB}`;
}


// SCROLL

function goToContent() {
  document.getElementById("content")
    .scrollIntoView({ behavior:"smooth" });
}


// CARD ANIMATION

const cards = document.querySelectorAll(".card");

function reveal() {

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      card.classList.add("show");
    }

  });

}

window.addEventListener("scroll", reveal);
reveal();


// FAKE LIVE USERS

setInterval(() => {

  const num = document.getElementById("liveUsers");

  let value = parseInt(num.innerText);

  value += Math.floor(Math.random() * 5);

  num.innerText = value;

}, 4000);


// QUIZ VIRAL SYSTEM

function answerQuiz(answer) {

  let title = "";
  let desc = "";

  if (answer === "yes") {
    title = "🔥 Informed Voter";
    desc = "You stay updated and care about Nepal's future.";
  } else {
    title = "🌱 Silent Voter";
    desc = "You care, but stay low-key. Time to engage more!";
  }

  document.getElementById("quizTitle").innerText = title;
  document.getElementById("quizDesc").innerText = desc;

  document.getElementById Toggle = document.getElementById("quizOptions");
  Toggle.style.display = "none";

  document.getElementById("quizResultBox").style.display = "block";

  const site = "https://itsdways.github.io/nepal-vote-hub/";

  const message =
    "I am a " + title +
    " 🇳🇵 on Nepal Vote Hub! \nCheck yours 👉 " +
    site;

  document.getElementById("shareWhatsapp").href =
    "https://wa.me/?text=" + encodeURIComponent(message);

  document.getElementById("shareFacebook").href =
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(site);

  document.getElementById("shareTwitter").href =
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(message);
}
