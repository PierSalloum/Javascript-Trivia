//code to remove start and show game from hidden visibility
let toggleGame = document.getElementById("game");
let playHide = document.getElementById("startgame");

playHide.addEventListener("click", function () {
  toggleGame.style.visibility = "visible";
  gameLogic();
  if (toggleGame.style.visibility === "visible") {
    playHide.remove();
  }
});
//code to remove start and show game from hidden visibility


//code for timer
let timerGame = document.getElementById("timer");
let timerTimeLeft = 20;
let questionDisplay = document.getElementById("questions");
let currentQuestion = 0;

let intervalId = null;
intervalId = setInterval(myTimer, 1000);

function myTimer() {
  if (timerTimeLeft <= 0) {
    clearInterval(intervalId);
    timerGame.innerHTML = "Time's up!";
  }
  else if (toggleGame.style.visibility === "visible") {
    timerTimeLeft--;
    timerGame.innerHTML = timerTimeLeft;
  }
}
//code for timer

//array of questions
const questions = [
  {
    question: "what is 2+8",
    answers: {
      answer1: "13",
      answer2: "10",
      answer3: "11",
      answer4: "7"
    },
    correctAnswer: "10"
  },
  {
    question: "what is 11+9",
    answers: {
      answer1: "13",
      answer2: "8",
      answer3: "11",
      answer4: "20"
    },
    correctAnswer: "20"
  },
  {
    question: "what is 2+5",
    answers: {
      answer1: "13",
      answer2: "8",
      answer3: "11",
      answer4: "7"
    },
    correctAnswer: "7"
  },
  {
    question: "what is 2+9",
    answers: {
      answer1: "13",
      answer2: "8",
      answer3: "11",
      answer4: "7"
    },
    correctAnswer: "11"
  },
  {
    question: "what is 2*2",
    answers: {
      answer1: "2",
      answer2: "4",
      answer3: "7",
      answer4: "8"
    },
    correctAnswer: "4"
  }

];
//array of questions

//question and anwswer randomness logic
let btnsArray = ["btn1", "btn2", "btn3", "btn4"]
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
shuffle(btnsArray);
shuffle(questions);

function gameLogic() {
  setQuestions();
}
//question and anwswer randomness logic
//next question
// let scoreGame = document.getElementById("gamescore");

//  if (answer === questions[currentQuestion].answer) {
//    scoreGame += 10;
//  } else {


//  }

function setQuestions() {
  questionDisplay.innerHTML = questions[currentQuestion].question;

  console.log(currentQuestion)

  const btn1 = document.getElementById(btnsArray[0]);
  btn1.innerHTML = questions[currentQuestion].answers.answer1;
  btn1.addEventListener("click", () => {
    if (questions[currentQuestion].answers.answer1 === questions[currentQuestion].correctAnswer) console.log("correct!");
    setNextQuestion();
  });

  const btn2 = document.getElementById(btnsArray[1]);
  btn2.innerHTML = questions[currentQuestion].answers.answer2;
  btn2.addEventListener("click", () => {
    if (questions[currentQuestion].answers.answer2 === questions[currentQuestion].correctAnswer) console.log("correct!");
    setNextQuestion();

  });

  const btn3 = document.getElementById(btnsArray[2]);
  btn3.innerHTML = questions[currentQuestion].answers.answer3;
  btn3.addEventListener("click", () => {
    if (questions[currentQuestion].answers.answer3 === questions[currentQuestion].correctAnswer) console.log("correct!");
    setNextQuestion();
  });

  const btn4 = document.getElementById(btnsArray[3]);
  btn4.innerHTML = questions[currentQuestion].answers.answer4;
  btn4.addEventListener("click", () => {
    if (questions[currentQuestion].answers.answer4 === questions[currentQuestion].correctAnswer) console.log("correct!");
    setNextQuestion();
  });
}

function setNextQuestion() {
  if (currentQuestion === questions.length - 1) {
    alert("game ended");
  } else {
    setQuestions();
    currentQuestion = currentQuestion + 1;
    console.log("setting next questions...")
  }
}











