//code to remove start and show game from hidden visibility
    let toggleGame = document.getElementById("game");
    let playHide = document.getElementById("startgame");

    playHide.addEventListener("click", function() {
        toggleGame.style.visibility = "visible";
        if (toggleGame.style.visibility === "visible") {
          playHide.remove();
        }
      });
//code to remove start and show game from hidden visibility

//code for timer
    let timerGame = document.getElementById("timer");
    let timerTimeLeft = 5;
    let intervalId = null
    let questionDisplay = document.getElementById("questions");
    let currentQuestion = 0;

    playHide.addEventListener("click", myTimer)
      intervalId = setInterval(myTimer, 1000);

    function myTimer() {
      if (timerTimeLeft <= 0) {
        clearInterval(intervalId);
        timerGame.innerHTML = "Time's up!";
      }
      else if (toggleGame.style.visibility === "visible") {
        timerTimeLeft--;
        gameLogic();
        timerGame.innerHTML = timerTimeLeft;
      }
    }
  //code for timer

  //array of questions
  const questions = [
    {
      question: "what is 2+2",
      answers:  {
        answer1: "2",
        answer2: "8",
        answer3: "7",
        answer4: "4"
      },
      correctAnswer: "answer4"   
    },
    {
      question: "what is 2*2",
      answers:  {
        answer1: "2",
        answer2: "4",
        answer3: "7",
        answer4: "8"
      },
      correctAnswer: "answer2"   
    }
    
  ];
  //array of questions

//question and anwswer randomness logic
    let btnsArray = ["btn1", "btn2", "btn3", "btn4"]
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;

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

    function gameLogic(){
      questionDisplay.innerHTML = questions[currentQuestion].question;

      document.getElementById(btnsArray[0]).innerHTML = questions[currentQuestion].answers.answer1;
      document.getElementById(btnsArray[1]).innerHTML = questions[currentQuestion].answers.answer2;
      document.getElementById(btnsArray[2]).innerHTML = questions[currentQuestion].answers.answer3;
      document.getElementById(btnsArray[3]).innerHTML = questions[currentQuestion].answers.answer4;
    }
//question and anwswer randomness logic

//next question
    



      