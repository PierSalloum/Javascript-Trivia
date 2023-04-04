//code to remove start and show game from hidden visibility
let toggleGame = document.getElementById("game");
let playHide = document.getElementById("startgame");

playHide.addEventListener("click", function () {
  toggleGame.style.visibility = "visible";
  if (toggleGame.style.visibility === "visible") {
    playHide.remove();
    questionDisplay()
    answersDisplay()
  }
});
//code to remove start and show game from hidden visibility


//code for timer
let timerGame = document.getElementById("timer");
let timerTimeLeft = 60;

let intervalId = null;
intervalId = setInterval(myTimer, 1000);

function myTimer() {
  if (timerTimeLeft === 0) {
    clearInterval(intervalId);
    timerGame.innerHTML = "Time's up!";
    endGame()
  }
  else if (toggleGame.style.visibility === "visible") {
    timerTimeLeft--;
    timerGame.innerHTML = timerTimeLeft;
  }
}
//code for timer

//array of random questions
const questions = [
  {
    question: "Which statement cannot be used to declare a variable in JavaScript?",
    answers: {
      answer1: "int",
      answer2: "let",
      answer3: "var",
      answer4: "const"
    },
    correctAnswer: "int"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      answer1: "javascript",
      answer2: "js",
      answer3: "script",
      answer4: "scripting"
    },
    correctAnswer: "script"
  },
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    answers: {
      answer1: "document.write('Hello World')",
      answer2: "'Hello World'",
      answer3: "var",
      answer4: "print hello world"
    },
    correctAnswer: "document.write('Hello World')"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: {
      answer1: "int print()hello world",
      answer2: "let print",
      answer3: "alert('Hello World')",
      answer4: "const world"
    },
    correctAnswer: "alert('Hello World')"
  },
  {
    question: "How do you create a function?",
    answers: {
      answer1: "int set function",
      answer2: "function myFunction()",
      answer3: "var()",
      answer4: "function set ()"
    },
    correctAnswer: "function myFunction()"
  },
  {
    question: "How do you round the number 7.25, to the nearest whole number?",
    answers: {
      answer1: "round.math(7.25)",
      answer2: "rnd(7.25)",
      answer3: "round(7)",
      answer4: "Math.round(7.25)"
    },
    correctAnswer: "Math.round(7.25)"
  },
  {
    question: "In JavaScript, which of the following is a logical operator?",
    answers: {
      answer1: "&&",
      answer2: "%",
      answer3: "p",
      answer4: "/"
    },
    correctAnswer: "&&"
  },
  {
    question: "When you want to use JavaScript to manipulate the browser window, the browser window's JavaScript object name is",
    answers: {
      answer1: "int browser",
      answer2: "let window",
      answer3: "window",
      answer4: "window.window"
    },
    correctAnswer: "window"
  },
  {
    question: "Alert(message), close() and reset() are JavaScript:",
    answers: {
      answer1: "series",
      answer2: "command",
      answer3: "properties",
      answer4: "methods"
    },
    correctAnswer: "methods"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: {
      answer1: "style",
      answer2: "font",
      answer3: "class",
      answer4: "const"
    },
    correctAnswer: "style"
  }

];  
//array of questions

//display current question in array
function questionDisplay() {
  questionText.textContent = questions[currentQuestion].question
}
//display current question in array

let currentQuestion = 0
currentQuestionRandomizer()

function currentQuestionRandomizer() {
  currentQuestion = Math.floor(Math.random() * questions.length);
}

let questionText = document.getElementById("questions")

let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let button4 = document.getElementById("btn4")

//logic to verify answers
function answersDisplay() {
  button1.textContent = questions[currentQuestion].answers.answer1;
  button1.addEventListener("click", function() {
    if (button1.textContent === questions[currentQuestion].correctAnswer) {
      console.log("correct");
      gameTrackerLogic()
      scoreUpdater()
      endGame()
      questions.splice(currentQuestion, 1)
      currentQuestionRandomizer()
      button1.textContent = questions[currentQuestion].answers.answer1;
      button2.textContent = questions[currentQuestion].answers.answer2;
      button3.textContent = questions[currentQuestion].answers.answer3;
      button4.textContent = questions[currentQuestion].answers.answer4;
      questionDisplay();
    } else {
      console.log("incorrect");
      scoreUpdaterWrong ()
      negativeCheck()
      timerSubtract()
    }  
  });  
  button2.textContent = questions[currentQuestion].answers.answer2;
  button2.addEventListener("click", function() {
    if (button2.textContent === questions[currentQuestion].correctAnswer) {
      console.log("correct");
      gameTrackerLogic()
      scoreUpdater()
      endGame()
      questions.splice(currentQuestion, 1)
      currentQuestionRandomizer()
      button1.textContent = questions[currentQuestion].answers.answer1;
      button2.textContent = questions[currentQuestion].answers.answer2;
      button3.textContent = questions[currentQuestion].answers.answer3;
      button4.textContent = questions[currentQuestion].answers.answer4;
      questionDisplay();
    } else {
      console.log("incorrect");
      scoreUpdaterWrong ()
      negativeCheck()
      timerSubtract()
    }  
  });  
  button3.textContent = questions[currentQuestion].answers.answer3;
  button3.addEventListener("click", function() {
    if (button3.textContent === questions[currentQuestion].correctAnswer) {
      console.log("correct");
      gameTrackerLogic()
      scoreUpdater()
      endGame()
      questions.splice(currentQuestion, 1)
      currentQuestionRandomizer()
      button1.textContent = questions[currentQuestion].answers.answer1;
      button2.textContent = questions[currentQuestion].answers.answer2;
      button3.textContent = questions[currentQuestion].answers.answer3;
      button4.textContent = questions[currentQuestion].answers.answer4;
      questionDisplay();
    } else {
      console.log("incorrect");
      scoreUpdaterWrong ()
      negativeCheck()
      timerSubtract()
    }  
  });  
  button4.textContent = questions[currentQuestion].answers.answer4;
  button4.addEventListener("click", function() {
    if (button4.textContent === questions[currentQuestion].correctAnswer) {
      console.log("correct");
      gameTrackerLogic()
      scoreUpdater()
      endGame()
      questions.splice(currentQuestion, 1)
      currentQuestionRandomizer()
      button1.textContent = questions[currentQuestion].answers.answer1;
      button2.textContent = questions[currentQuestion].answers.answer2;
      button3.textContent = questions[currentQuestion].answers.answer3;
      button4.textContent = questions[currentQuestion].answers.answer4;
      questionDisplay();
    } else {
      console.log("incorrect");
      scoreUpdaterWrong ()
      negativeCheck()
      timerSubtract()
    }  
  });  
}  
//logic to verify answers


//fix for score going negative
function negativeCheck() {
  if (scoreCount <= 0) {
    scoreCount = 0
  }
}

//endgame logic
let gameTracker = 0

function gameTrackerLogic() {
  gameTracker++
  console.log(gameTracker)
}

let inputSection = document.getElementById("inputsection")

function endGame() {
  if (timerTimeLeft === 0) {
    console.log("game over")
    toggleGame.remove()
    ScoreTrigger()
    inputSection.style.visibility ="visible"
    }
  if (gameTracker === 10) {
    console.log("game over")
    toggleGame.remove()
    ScoreTrigger()
    inputSection.style.visibility ="visible"
  }
  else {
    console.log("continue")
  }
}
//endgame logic

//score updater
let scoreCount = 0
let scoreCountTracker = document.getElementById("scorenumber")

function scoreUpdater() {
  scoreCount++
  scoreCountTracker.textContent = scoreCount
}

function scoreUpdaterWrong () {
  scoreCount--
  scoreCountTracker.textContent = scoreCount
}
//score updater

//leaderboard code

let finalScoreUpdater = document.getElementById("finalscore")
finalScoreUpdater.textContent = "Final Score: " + scoreCount;

function ScoreTrigger() {
  finalScoreUpdater.textContent = "Final Score: " + scoreCount;
}

let playerDisplay = document.getElementById("player").textContent
let playerStorage = window.localStorage.getItem("playerStorage")
playerDisplay.textContent = playerStorage

if (playerStorage) {
  const playerDisplay = document.getElementById("player");
  playerDisplay.textContent = playerStorage;
}

function submitForm() {
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value;
  const score = scoreCount + " points";
  const scorePrinter = name +" "+ score
  player.textContent = scorePrinter
  window.localStorage.setItem("playerStorage", scorePrinter)
  inputSection.style.visibility ="hidden"
}

function timerSubtract() {
  timerTimeLeft -= 3
}
//leaderboard code