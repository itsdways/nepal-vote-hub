// POLL COUNTS
let votesA = 0;
let votesB = 0;

// Voting
function vote(party){

  if(party === 'A'){
    votesA++;
  }

  if(party === 'B'){
    votesB++;
  }

  document.getElementById('pollResult').textContent =
    `Party A: ${votesA} | Party B: ${votesB}`;
}


// Scroll to cards
function goToContent(){

  document
    .getElementById('content')
    .scrollIntoView({behavior:'smooth'});

}


// Reveal cards on scroll
const cards = document.querySelectorAll('.card');

function reveal(){

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;
    const h = window.innerHeight;

    if(top < h - 80){
      card.classList.add('show');
    }

  });

}

window.addEventListener('scroll',reveal);
reveal();


// Fake live users counter
let count = 1234;

setInterval(()=>{

  count += Math.floor(Math.random()*3);

  document.getElementById('userCount').textContent = count;

},3000);


// Quiz
function answerQuiz(ans){

  const result = document.getElementById('quizResult');

  if(ans === 'yes'){
    result.textContent = "🔥 You're politically active!";
  }
  else{
    result.textContent = "🙂 Time to get more informed!";
  }

}
