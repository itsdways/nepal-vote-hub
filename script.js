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
