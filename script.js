// Simple poll counters
let votesA = 0;
let votesB = 0;

// Handle voting
function vote(party) {
  if (party === 'A') {
    votesA++;
  } else if (party === 'B') {
    votesB++;
  }

  // Update result text
  const result = document.getElementById('pollResult');
  result.textContent = `Party A: ${votesA} | Party B: ${votesB}`;
}

// Smooth scroll to content
function goToContent() {
  const section = document.getElementById('content');

  section.scrollIntoView({
    behavior: 'smooth'
  });
}

// Scroll reveal for cards

const cards = document.querySelectorAll('.card');

const reveal = () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      card.classList.add('show');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
