const firebaseConfig = window.FIREBASE_CONFIG;
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const gameCode = (params.get("game") || "").trim().toUpperCase();

function slugCode() {
  return Math.random().toString(36).slice(2, 6).toUpperCase() +
         Math.random().toString(36).slice(2, 4).toUpperCase();
}
function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}
function showMessage(el, msg, kind="") {
  el.textContent = msg;
  el.className = "message " + kind;
}
function gameRef(code=gameCode) { return db.collection("games").doc(code); }
function teamRef(code, teamId) { return gameRef(code).collection("teams").doc(teamId); }
function answerKey(game) { return `r${game.currentRound}_s${game.currentSong}`; }
function currentRound(game) {
  return (game.rounds || [])[game.currentRound] || {name:"Round", songCount:10};
}
function pointsText(team) {
  return `${team.totalPoints || 0} pts`;
}
