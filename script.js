// POLL
let votesA = 0;
let votesB = 0;

function vote(party){
  if(party==="A") votesA++;
  if(party==="B") votesB++;

  document.getElementById("pollResult").textContent =
    `Party A: ${votesA} | Party B: ${votesB}`;
}

// SCROLL
function goToContent(){
  document.getElementById("content")
    .scrollIntoView({behavior:"smooth"});
}

// QUIZ
function answerQuiz(ans){
  const r = document.getElementById("quizResult");

  if(ans==="yes"){
    r.textContent="🔥 You are an Active Voter!";
  } else {
    r.textContent="🙂 You are a Casual Voter!";
  }
}

// REVEAL
const cards = document.querySelectorAll(".card");

function reveal(){
  cards.forEach(c=>{
    if(c.getBoundingClientRect().top < window.innerHeight-80){
      c.classList.add("show");
    }
  });
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// FAKE LIVE USERS
setInterval(()=>{
  const el=document.querySelector(".live-count");
  if(!el) return;

  el.textContent=
    `🔥 ${1200+Math.floor(Math.random()*60)} people predicting right now`;
},3000);

// CARD EXPAND
document.querySelectorAll(".card").forEach(c=>{
  c.addEventListener("click",()=>{
    c.classList.toggle("expanded");
  });
});
