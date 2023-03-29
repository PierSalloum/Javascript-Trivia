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

    playHide.addEventListener("click", myTimer)
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
        answer2: "8",
        answer3: "7",
        answer4: "4"
      },
      correctAnswer: "answer4"   
    }
    
  ];
  //array of questions

    let questionDisplay = document.getElementById("questions");

    if (toggleGame.style.visibility === "visible"); {
      questionDisplay.innerHTML = 
    }



      