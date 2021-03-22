// Global constants
const cluePauseTime = 333; 
const nextClueWaitTime = 1000; 

///Global Variables
var pattern = [5, 2, 5, 3, 4, 5, 4, 6, 4, 2, 1, 4, 2, 1, 5, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var lives;

var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function startGame() {
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  lives = 3;
      document.getElementById("heart1").classList.remove("hidden");
      document.getElementById("heart2").classList.remove("hidden");
      document.getElementById("heart3").classList.remove("hidden");
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

const freqMap = {
  1: 392,
  2: 440,
  3: 329.63,
  4: 293.66,
  5: 349.23,
  6: 261.63
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
    
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i])
    
    clueHoldTime -= 5;
      
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over! Sorry, you lost.");
}

function winGame(){
  stopGame();
  alert("Congrats, you won!\n\nYou unlocked Disney Pixar's Up - Married Life");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(guessCounter == pattern.length - 1){
      winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    } 
  }else{
    lives--;
   
    if(lives == 2){
      alert("You lost a life! You have "+lives+" lives left. Try again after the clue replay.");
      document.getElementById("heart3").classList.add("hidden");
    }
    if(lives == 1){
      alert("You lost a life! You have "+lives+" lives left. Try again after the clue replay.");
      document.getElementById("heart2").classList.add("hidden");
    }
  
    playClueSequence();

    if(lives == 0){
      document.getElementById("heart1").classList.add("hidden");
      loseGame();
    }
  }
}