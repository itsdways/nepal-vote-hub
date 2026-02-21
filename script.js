let votesA = 0;
let votesB = 0;

function vote(party) {
  if (party === 'A') votesA++;
  if (party === 'B') votesB++;

  document.getElementById("pollResult").textContent =
    `Party A: ${votesA} | Party B: ${votesB}`;
}

function goToContent() {
  document.getElementById("content")
    .scrollIntoView({ behavior: "smooth" });
}

function answerQuiz(answer) {
  const result = document.getElementById("quizResult");

  if (answer === "yes") {
    result.textContent = "🔥 You are an Active Voter!";
  } else {
    result.textContent = "🙂 You are a Casual Voter!";
  }
}

const cards = document.querySelectorAll(".card");

function revealCards() {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 80) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
